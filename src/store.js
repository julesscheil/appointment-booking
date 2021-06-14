import { createStore } from 'redux';
import rootReducer from './reducers'

// function inState(initialState) {
//     return createStore(rootReducer, initialState)
// };

export const store = createStore(rootReducer);