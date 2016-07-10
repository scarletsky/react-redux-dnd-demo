import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import _, { assign, isEqual, isObject, omit, includes, values, times } from 'lodash';
import { batchActions } from 'redux-batched-actions';
import { addToy, updateSelectionHoverArea } from 'actions/index';
import { genPadId } from 'utils/index';
import Overlay from './Overlay';
import { ToyTypes } from 'constants/index';
import ToyWrapper from 'components/toys/ToyWrapper';

const spec = {
  hover(props, monitor) {
    const item = monitor.getItem();
    if (item.type !== ToyTypes.COMPOSITION) return;

    const { dispatch, cell, section } = props;

    if (cell.id !== props.hoverId) {
      console.log(`cell.id: ${cell.id}  props.hoverId: ${props.hoverId}`);
      dispatch(updateSelectionHoverArea({
        cell,
        section,
        grid: item.props.grid
      }));
    }
  },

  canDrop(props, monitor) {
    const item = monitor.getItem();
    if (isEqual(item.type,  ToyTypes.COMPOSITION)) {
      return props.canDropInHoverArea;
    }

    return true;
  },

  drop(props, monitor, component) {
    const cellId = props.id;
    const { dispatch, suite, toy, toys } = props;
    let item = monitor.getItem();

    // 拖放组合组件
    if (isEqual(item.type, ToyTypes.COMPOSITION)) {
      let splitId = _(cellId).split('-').map(x => Number(x)).value();
      let actions = item.props.toys.map(t => {
        return addToy({
          id: `${genPadId(splitId[0])}-${genPadId(splitId[1]+t.position[0]-1)}-${genPadId(splitId[2]+t.position[1]-1)}`,
          type: t.type,
          props: t.props
        });
      });

      return dispatch(batchActions(actions));
    }

    // 拖放独立组件
    let itemProps = omit(
      omit(item, 'id', 'type').props,
      'isDragging',
      'connectDragSource'
    );
    dispatch(addToy({
      id: cellId,
      type: item.type,
      props: itemProps
    }));

  }
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    itemType: monitor.getItemType(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver()
  };
}


@connect((state, props) => ({
  section: state.sections[props.id.split('-').shift()],
  cell: state.cells[props.id],
  toy: state.toys[props.id],
  hoverId: state.selection.hoverArea.cellIds[0],
  isInHoverArea: includes(state.selection.hoverArea.cellIds, props.id),
  canDropInHoverArea: includes(state.selection.hoverArea.cellIds, props.id) && state.selection.hoverArea.canDrop
}))
@DropTarget('TOY', spec, collect)
class Cell extends React.Component {

  get toy() {
    const { id, toy, dispatch } = this.props;

    if (!toy || !toy.type) return;

    return <ToyWrapper id={id} toy={toy} dispatch={dispatch} />;

  };

  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;
    const { isInHoverArea, canDropInHoverArea } = this.props;

    return connectDropTarget(
      <td
        style={{
          width: 100,
          height: 50,
          border: '1px solid',
          position: 'relative',
          backgroundColor: ((isOver && canDrop) || (isInHoverArea && canDropInHoverArea)) ? 'green' : 'white'
      }}>
      {this.toy}
      </td>
    );
  }
}

export default Cell;
