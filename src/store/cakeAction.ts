import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./IceCreame";
import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { userReducer } from "./user/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceCreamReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export { store };
