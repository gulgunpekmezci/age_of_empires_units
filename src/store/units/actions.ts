import {
  FETCH_UNIT_REQUEST,
  FETCH_UNIT_SUCCESS,
  FETCH_UNIT_FAILURE,
  FILTER_UNIT,
} from "./actionTypes";

import {
  FetchUnitRequest,
  FetchUnitSuccess,
  FetchUnitSuccessPayload,
  FetchUnitFailure,
  FetchUnitFailurePayload,
  FilterUnit,
  FilterUnitPayload,
} from "./types";

export const fetchUnitRequest = (): FetchUnitRequest => ({
  type: FETCH_UNIT_REQUEST,
});

export const fetchUnitSuccess = (
  payload: FetchUnitSuccessPayload
): FetchUnitSuccess => ({
  type: FETCH_UNIT_SUCCESS,
  payload,
});

export const fetchUnitFailure = (
  payload: FetchUnitFailurePayload
): FetchUnitFailure => ({
  type: FETCH_UNIT_FAILURE,
  payload,
});

export const filterUnit = (payload: FilterUnitPayload): FilterUnit => ({
  type: FILTER_UNIT,
  payload,
});
