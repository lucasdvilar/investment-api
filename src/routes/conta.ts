import { Router } from "express";
import auth from "../middlewares/auth";

const router = Router();

router.post('/:cod-cliente', auth);

export default router;
