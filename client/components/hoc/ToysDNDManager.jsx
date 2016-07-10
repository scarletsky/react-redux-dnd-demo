import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { ToyTypes } from 'constants/index';
import Overlay from 'components/grids/Overlay';
import { clearSelectionHoverArea } from 'actions/index';

function getSpec(type, defaultProps) {
  return {
    beginDrag(props, monitor, component) {
      return {
        id: props.id,
        type,
        props: props.toy.props || defaultProps
      };
    },

    endDrag(props, monitor, component) {
      const item = monitor.getItem();
      const { dispatch } = props;
      if (item.type === ToyTypes.COMPOSITION) {
        dispatch(clearSelectionHoverArea());
      }
    }
  };
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}


export default (toyTypes) => (ComposedComponent) => {

  @connect()
  @DragSource('TOY', getSpec(toyTypes, ComposedComponent.defaultProps), collect)
  class T extends Component {

    render() {
      const { connectDragSource } = this.props;
      const { id, toy, children, dispatch } = this.props;
      const toyProps = toy ? toy.props : ComposedComponent.defaultProps;

      return this.props.draggable
        ? connectDragSource(
            <div>
              <Overlay />
              <ComposedComponent
                id={id}
                {...toyProps}
                children={children}
                />
            </div>
          )
        : <ComposedComponent
            dispatch={dispatch}
            id={id}
            children={children}
            {...toyProps}
            />;
    }
  }

  return T;
};
