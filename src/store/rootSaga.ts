import { all, fork } from "redux-saga/effects";
import unitSaga from "./units/sagas";

export function* rootSaga() {
  yield all([fork(unitSaga)]);
}
