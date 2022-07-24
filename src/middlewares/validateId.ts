import { NextFunction, Request, Response } from "express";
import HttpException from "../helpers/HttpException";

const validateId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { clientId } = res.locals;
  if (Number(id) !== clientId) throw new HttpException(403, 'Forbidden access.')
  next();
}

export default validateId;
