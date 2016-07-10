import { assign } from 'lodash';
import { ADD_TOY } from 'actions/index';

const initState = {

};

function toys(state = initState, action) {
  switch (action.type) {
    case ADD_TOY:
      return assign({}, state, { [action.payload.id]: action.payload });
    default:
      return state;
  }
}

export default toys;
