import { createStore } from 'redux';
import rootReducer from './reducers'

function inState(initState) {
    return createStore(rootReducer, initState)
};

export default inState