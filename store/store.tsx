import { createStore, combineReducers,applyMiddleware } from "redux";
import { mainReducer } from "./reducer";
import thunk from 'redux-thunk';
const rootReducer = combineReducers({ mainReducer });

const store = createStore(rootReducer,applyMiddleware(thunk));

export { store };
