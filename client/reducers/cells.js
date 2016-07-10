import { assign, times, flattenDeep } from 'lodash';
import { ADD_SECTION } from 'actions/index';
import { initSection, initCell } from 'constants/index';
import { genPadId } from 'utils/index';

const initState = {};

function cells(state = initState, action) {
  switch (action.type) {
    case ADD_SECTION:
      return assign({}, state,

        flattenDeep(
          times(action.payload.rows || initSection.rows)
            .map((a, i) => times(action.payload.cols || initSection.cols)
              .map((b, j) => ({
                [`${action.payload.id}-${genPadId(i+1)}-${genPadId(j+1)}`]: assign({}, initCell, {
                  id: `${action.payload.id}-${genPadId(i+1)}-${genPadId(j+1)}`
                })
              }))
          )
        ).reduce((prev, next) => assign({}, prev, next))

      );
    default:
      return state;
  }
}

export default cells;
