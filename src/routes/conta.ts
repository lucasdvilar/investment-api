import { Router } from "express";
import ClientController from "../controllers/Client";
import auth from "../middlewares/auth";

const router = Router();

router.post('/deposito', new ClientController().deposit);
router.post('/saque', auth);
router.get('/:cod-cliente', auth);

export default router;
