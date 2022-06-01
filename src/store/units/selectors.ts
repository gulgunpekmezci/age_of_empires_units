import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getLoading = (state: AppState) => state.unit.loading;

const getUnits = (state: AppState) => state.unit.units;

const getError = (state: AppState) => state.unit.error;

export const getUnitsSelector = createSelector(getUnits, (units) => units);

export const getPendingSelector = createSelector(
  getLoading,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
