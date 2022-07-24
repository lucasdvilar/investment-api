import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../helpers/HttpException';

const validateInvestimentos = (req: Request, _res: Response, next: NextFunction) => {
  const investment = req.body;
  const { error } = Joi.object({
    assetId: Joi.number().required(),
    quantity: Joi.number().required(),
  }).validate(investment);
  if (error) {
    throw new HttpException(400, error.details[0].message);
  }
  next();
};

export default validateInvestimentos;
