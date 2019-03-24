import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';

import rootReducer from './rootReducer';

export const store = createStore(rootReducer, {}, applyMiddleware(reduxLogger));
