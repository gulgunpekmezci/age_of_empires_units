import { combineReducers } from "redux";
import unitReducer from "./units/reducer";

const rootReducer = combineReducers({
  unit: unitReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
