import {
  FETCH_UNIT_REQUEST,
  FETCH_UNIT_SUCCESS,
  FETCH_UNIT_FAILURE,
  FILTER_UNIT,
} from "./actionTypes";

export interface Unit {
  accuracy: string;
  age: string;
  armor: string;
  attack: number;
  attack_delay: number;
  build_time: number;
  cost: Cost;
  description: string;
  expansion: string;
  hit_points: number;
  id: number;
  line_of_sight: number;
  movement_rate: number;
  name: string;
  range: number;
  reload_time: number;
}

interface Cost {
  type: string;
  value: number;
}

export interface Filter {
  cost: Cost[];
  age: string;
}

export interface UnitState {
  readonly loading: boolean;
  readonly units: Unit[];
  readonly filter: Filter[];
  readonly error?: string;
}

export interface FetchUnitSuccessPayload {
  units: Unit[];
}

export interface FetchUnitFailurePayload {
  error: string;
}

export interface FilterUnitPayload {
  filter: Filter;
}

export interface FetchUnitRequest {
  type: typeof FETCH_UNIT_REQUEST;
}

export interface FetchUnitSuccess {
  type: typeof FETCH_UNIT_SUCCESS;
  payload: FetchUnitSuccessPayload;
}

export interface FetchUnitFailure {
  type: typeof FETCH_UNIT_FAILURE;
  payload: FetchUnitFailurePayload;
}

export interface FilterUnit {
  type: typeof FILTER_UNIT;
  payload: FilterUnitPayload;
}

export type UnitActions =
  | FetchUnitRequest
  | FetchUnitSuccess
  | FetchUnitFailure;
