import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../helpers/HttpException';

const validateWithdrawal = (req: Request, _res: Response, next: NextFunction) => {
  const withdrawal = req.body;
  const { error } = Joi.object({
    amount: Joi.number().greater(0).required(),
  }).validate(withdrawal);
  if (error) {
    throw new HttpException(400, error.details[0].message);
  }
  next();
};

export default validateWithdrawal;
