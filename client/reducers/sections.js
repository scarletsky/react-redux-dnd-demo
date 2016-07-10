import { assign, times } from 'lodash';
import { ADD_SECTION } from 'actions/index';
import { initSection } from 'constants/index';
import { genPadId } from 'utils/index';

const initState = {};

function sections(state = initState, action) {
  switch (action.type) {
    case ADD_SECTION:
      return assign({}, state, {
        [action.payload.id]: assign({}, {
          id: action.payload.id,
          rows: action.payload.rows || initSection.rows,
          cols: action.payload.cols || initSection.cols,
          rowIds: times(action.payload.rows || initSection.rows).map(v => `${action.payload.id}-${genPadId(v+1)}`)
        })
      });

    default:
      return state;
  }
}

export default sections;
