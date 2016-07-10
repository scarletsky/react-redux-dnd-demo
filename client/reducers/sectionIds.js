import { assign } from 'lodash';
import { ADD_SECTION } from 'actions/index';

const initState = [];

function sectionids(state = initState, action) {
  switch (action.type) {
    case ADD_SECTION:
      return state.concat(action.payload.id);
    default:
      return state;
  }
}

export default sectionids;
