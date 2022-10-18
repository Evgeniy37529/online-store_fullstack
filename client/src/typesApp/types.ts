export type typeType = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type typeTypes = typeType[];

export interface IState {
  types: typeTypes;
  selectedType: typeType | null;
}
