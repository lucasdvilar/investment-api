import { Router } from "express";
import auth from "../middlewares/auth";

const router = Router();

router.get('/:cod-cliente', auth);

export default router;
