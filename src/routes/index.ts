import { Router } from "express";
import investimentoRouter from './investimentos';

const router = Router();

router.use('/investimentos', investimentoRouter);

export default router;
