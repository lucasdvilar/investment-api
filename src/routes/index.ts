import { Router } from "express";
import auth from "../middlewares/auth";
import validateInvestimentos from "../middlewares/validateInvestimentos";
import investimentoRouter from './investimentos';
import loginRouter from './login';
import contaRouter from './conta';
import ativosRouter from './ativos';

const router = Router();

router.use('/login', loginRouter);
router.use('/investimentos', validateInvestimentos, auth, investimentoRouter);
router.use('/ativos', ativosRouter)
router.use('/conta', contaRouter);

export default router;
