export type typesDevice = {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  typeId: number;
  brandId: number;
};

export type typeFetchDevice = {
  count?: number;
  rows: typesDevice[];
};

export interface IState {
  devices: typesDevice[];
  selectedDevice: number | null;
}

export type typeQueryDevice = {
  brandId?: string;
  typeId?: string;
  limit?: string;
  page?: string;
}
