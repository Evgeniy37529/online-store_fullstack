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
  info: any;
};

export type typeFetchDevice = {
  count?: number;
  rows: typesDevice[];
};

export interface IState {
  devices: typesDevice[];
  selectedIdDevice: number | null;
  loading: boolean;
}

export type typeQueryDevice = {
  brandId?: string;
  typeId?: string;
  limit?: string;
  page?: string;
};

// export type postTypeDevice = {
//   name: string;
//   price: number;
//   img: string;
//   typeId: number;
//   brandId: number;
//   info: any;
// };

export type postTypeDevice = {
  name: any;
  price: any;
  img: any;
  typeId: any;
  brandId: any;
  info: any;
};
