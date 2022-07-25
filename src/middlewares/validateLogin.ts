import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpException from '../helpers/HttpException';

const validateLogin = async (req: Request, _res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).validate({ username, password });
  if (error) {
    throw new HttpException(400, error.details[0].message);
  }
  next();
};

export default validateLogin;
