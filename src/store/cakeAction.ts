import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./IceCreame";
import { combineReducers, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export { store };
