import {
  FETCH_UNIT_REQUEST,
  FETCH_UNIT_SUCCESS,
  FETCH_UNIT_FAILURE,
  FILTER_UNIT,
} from "./actionTypes";
import { UnitState } from "./types";

const initialState: UnitState = {
  loading: false,
  units: [],
  filter: [],
  error: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_UNIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_UNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        units: action.payload.units,
        error: "",
      };
    case FETCH_UNIT_FAILURE:
      return {
        ...state,
        loading: false,
        units: [],
        error: action.payload.error,
      };
    case FILTER_UNIT:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return {
        ...state,
      };
  }
};
