import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({

    // format- <nickname for reducer>: <reducer name>
    counter: counterReducer,
    isLogged: isLoggedReducer

});

export default rootReducer;