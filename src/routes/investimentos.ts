import { Router } from "express";
import ClientAssetController from "../controllers/ClientAsset";

const router = Router();

router.post('/comprar', new ClientAssetController().purchase);

export default router;
