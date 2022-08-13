export type typeBrands = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}[];

export interface IState {
  brands: typeBrands;
  selectedBrand: number | null;
}
