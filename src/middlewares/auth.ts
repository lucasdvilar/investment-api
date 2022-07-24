import { NextFunction, Request, Response } from "express";
import HttpException from "../helpers/HttpException";
import Jwt from '../helpers/Jwt';
import { IJwtClient } from "../interfaces/IClient";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw new HttpException(401, 'Token not found.')
  const clientInfo = new Jwt().authenticateToken(token) as IJwtClient;
  const clientId = clientInfo.id;
  res.locals.clientId = clientId;
  next();
};

export default auth;
