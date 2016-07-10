import _, { assign } from 'lodash';
import { UPDATE_SELECTION_HOVER_AREA, CLEAR_SELECTION_HOVER_AREA } from 'actions/index';
import { genPadId } from 'utils/index';

const initState = {
  hoverArea: {
    cellIds: []
  }
};


function updateHoverArea(cell, section, need) {

  let canDrop = false;
  let isCellFit = (cell.rowSpan === 1 && cell.colSpan === 1);

  let position = _(cell.id)
    .split('-')
    .drop(1)
    .map(x => Number(x))
    .value();

  if (isCellFit) {
    canDrop = true;
  }

  function genMatrix(rows, cols, base) {
    return _(Array(rows).fill())
      .map((x, i) => _(Array(cols).fill())
                      .map((y, j) => `${genPadId(base[0]+i)}-${genPadId(base[1]+j)}`)
                      .value())
      .flattenDeep()
      .map(suffix => `${section.id}-${suffix}`)
      .value();
  }

  return {
    canDrop,
    cellIds: isCellFit ? genMatrix(need.rows, need.cols, position) : [cell.id]
  };

}

function selection(state = initState, action) {
  switch (action.type) {
    case UPDATE_SELECTION_HOVER_AREA:
      return assign({}, state, {
        hoverArea: updateHoverArea(
          action.payload.cell,
          action.payload.section,
          action.payload.grid
        )
      });
    case CLEAR_SELECTION_HOVER_AREA:
      return initState;
    default:
      return state;
  }
}

export default selection;
