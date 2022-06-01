export interface ICostItem {
  costItem: string;
  range: number | null;
}

export interface IUnit {
  accuracy: string;
  age: string;
  armor: string;
  attack: number;
  attack_delay: number;
  build_time: number;
  cost: ICost;
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

export interface ICost {
  type: string;
  value: number;
}
