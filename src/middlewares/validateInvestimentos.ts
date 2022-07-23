import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../helpers/HttpException';

const validateInvestimentos = async (req: Request, _res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const { error } = Joi.object({
    codCliente: Joi.number().required(),
    codAtivo: Joi.number().required(),
    qtdeAtivo: Joi.number().required(),
  }).validate({ codCliente, codAtivo, qtdeAtivo });
  if (error) {
    throw new HttpException(400, error.details[0].message);
  }
  next();
};

export default validateInvestimentos;
