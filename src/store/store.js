import { createStore } from 'redux';
import rootReducer from './reducer/reducers';
import { composeWithDevTools } from "@redux-devtools/extension";

const  composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;