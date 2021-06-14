import { createStore } from 'redux';
import root from './reducers'

function initialState() {
    return createStore(root, initialState)
};

export default initialState;