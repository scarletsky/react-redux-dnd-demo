import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import sectionIds from './sectionIds';
import sections from './sections';
import rows from './rows';
import cells from './cells';
import toys from './toys';
import selection from './selection';
import toysList from './toysList';

const root = enableBatching(combineReducers({
  sectionIds,
  sections,
  rows,
  cells,
  toys,
  selection,
  toysList
}));

export default root;
