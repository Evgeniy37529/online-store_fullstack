export type typeUser = {
  email: string;
  password: string;
  role?: string;
};

export type decodeUser = {
  id: number;
  email: string;
  role: string;
  exp: number;
  iat: number;
};

export interface IState {
  isAuth: boolean;
  id: number | null;
  email: string;
  role: string;
  error: string;
}
