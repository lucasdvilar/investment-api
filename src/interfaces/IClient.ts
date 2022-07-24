export interface IClient {
  username: string;
  password: string;
}

export interface IDbClient extends IClient {
  id: number;
  balance: number;
}

export interface IJwtClient extends IDbClient {
  iat: number;
  exp: number;
}

export interface ICliente {
  codCliente: number;
  saldo: number;
}
