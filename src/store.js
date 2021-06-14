import { createStore } from 'redux';
import rootReducer from './reducers'

function initialState() {
    return createStore(rootReducer, initialState)
};

export default initialState;