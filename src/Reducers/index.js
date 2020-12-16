import { combineReducers } from 'redux';

import counterReduce from './counter';
import loggedReducer from './isLogged';

const rootReducer = combineReducers({
    counterReduce,
    loggedReducer
})

export default rootReducer;
