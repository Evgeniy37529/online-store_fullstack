export type typeBrand = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type typeBrands = typeBrand[];

export interface IState {
  brands: typeBrands;
  selectedBrand: typeBrand | null;
}
