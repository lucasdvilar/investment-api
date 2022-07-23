export interface IUser {
  username: string;
  password: string;
}

export interface IDbUser extends IUser {
  id: number;
  balance: number;
}
