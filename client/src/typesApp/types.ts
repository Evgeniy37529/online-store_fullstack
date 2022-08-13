export type typeTypes = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}[];

export interface IState {
  types: typeTypes;
}