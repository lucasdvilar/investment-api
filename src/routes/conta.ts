import { Router } from "express";
import auth from "../middlewares/auth";

const router = Router();

router.post('/deposito');
router.post('/saque', auth);
router.get('/:cod-cliente', auth);

export default router;
