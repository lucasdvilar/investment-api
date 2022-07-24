import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../helpers/HttpException';

const validateDeposit = (req: Request, _res: Response, next: NextFunction) => {
  const deposit = req.body;
  const { error } = Joi.object({
    clientId: Joi.number().required(),
    amount: Joi.number().greater(0).required(),
  }).validate(deposit);
  if (error) {
    throw new HttpException(400, error.details[0].message);
  }
  next();
};

export default validateDeposit;
