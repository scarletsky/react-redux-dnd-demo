import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initState) {
  const store = createStore(
    rootReducer,
    initState,
    compose(
      applyMiddleware(createLogger({ duration: true }))
    )
  );

  return store;
}
