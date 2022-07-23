import { Router } from "express";
import investimentoRouter from './investimentos';
import loginRouter from './login';

const router = Router();

router.use('/login', loginRouter);
router.use('/investimentos', investimentoRouter);

export default router;
