import { NextFunction, Request, Response } from "express";
import HttpException from "../helpers/HttpException";
import Jwt from '../helpers/Jwt';
import { IJwtClient } from "../interfaces/IClient";

const auth = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw new HttpException(401, 'Token not found.')
  const clientInfo = new Jwt().authenticateToken(token) as IJwtClient;
  const clientId = clientInfo.id;
  if (clientId !== req.body.codCliente) throw new HttpException(401, 'Unauthorized access.')
  next();
};

export default auth;
