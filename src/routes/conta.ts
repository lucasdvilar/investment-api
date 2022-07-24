import { Router } from "express";
import ClientController from "../controllers/Client";
import auth from "../middlewares/auth";
import validateDeposit from "../middlewares/validateDeposit";
import validateWithdrawal from "../middlewares/validateWithdrawal";

const router = Router();

router.post('/deposito', validateDeposit, new ClientController().deposit);
router.post('/saque', auth, validateWithdrawal, new ClientController().withdrawal);
router.get('/:cod-cliente', auth);

export default router;
