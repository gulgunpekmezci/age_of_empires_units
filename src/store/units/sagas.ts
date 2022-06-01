import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUnitFailure, fetchUnitSuccess } from "./actions";
import { FETCH_UNIT_REQUEST } from "./actionTypes";
import data from "../age-of-empires-units.json";
export interface ResponseGenerator {
  config?: any;
  units?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const getUnits = () => data;

function* fetchUnitSaga() {
  try {
    const response: ResponseGenerator = yield call(getUnits);
    yield put(
      fetchUnitSuccess({
        units: response.units,
      })
    );
  } catch (e) {
    yield put(
      fetchUnitFailure({
        error: "An unknown error occurred.",
      })
    );
  }
}

function* unitSaga() {
  yield all([takeLatest(FETCH_UNIT_REQUEST, fetchUnitSaga)]);
}

export default unitSaga;
