export const ADD_SECTION = 'ADD_SECTION';
export const ADD_TOY = 'ADD_TOY';
export const UPDATE_SELECTION_HOVER_AREA = 'UPDATE_SELECTION_HOVER_AREA';
export const CLEAR_SELECTION_HOVER_AREA = 'CLEAR_SELECTION_HOVER_AREA';

export function addSection(payload) {
  return {
    type: ADD_SECTION,
    payload
  };
}

export function addToy(payload) {
  return {
    type: ADD_TOY,
    payload
  };
}

export function updateSelectionHoverArea(payload) {
  return {
    type: UPDATE_SELECTION_HOVER_AREA,
    payload
  };
}

export function clearSelectionHoverArea() {
  return { type: CLEAR_SELECTION_HOVER_AREA };
}
