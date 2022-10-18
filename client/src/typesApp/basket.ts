export type basketType = {
  count: number;
  rows: basketDeviceType;
};

export type basketDeviceType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  basketId: number;
  deviceId: number;
  device: typeDevice;
}[];

export type typeDevice = {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  createdAt: string;
  updatedAt: string;
  typeId: number;
  brandId: number;
};

export interface IState {
  idBasket: number | null;
  userBasket: basketDeviceType;
  quantityInBasket: number | null;
  selectedItem: userBasketItem | null;
}

export type userBasketItem = {
  id: number;
  createdAt: string;
  updatedAt: string;
  basketId: number;
  deviceId: number;
};
