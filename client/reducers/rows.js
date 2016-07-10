import { assign, times, } from 'lodash';
import { ADD_SECTION } from 'actions/index';
import { initSection } from 'constants/index';
import { genPadId } from 'utils/index';

const initState = {};

function rows(state = initState, action) {
  switch (action.type) {
    case ADD_SECTION:
      return assign({}, state,

        times(action.payload.rows || initSection.rows)
          .map(n => ({
            [`${action.payload.id}-${genPadId(n+1)}`]: {
              id: `${action.payload.id}-${genPadId(n+1)}`,
              cellIds: times(action.payload.cols || initSection.cols).map(v => `${action.payload.id}-${genPadId(n+1)}-${genPadId(v+1)}`)
            }
          })
        ).reduce((prev, next) => assign({}, prev, next))

      );
    default:
      return state;
  }
}

export default rows;
