import { Router } from "express";
import auth from "../middlewares/auth";
import validateInvestimentos from "../middlewares/validateInvestimentos";
import investimentoRouter from './investimentos';
import loginRouter from './login';

const router = Router();

router.use('/login', loginRouter);
router.use('/investimentos', validateInvestimentos, auth, investimentoRouter);

export default router;
