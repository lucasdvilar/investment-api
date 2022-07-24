import { Router } from "express";
import ClientAssetController from "../controllers/ClientAsset";

const router = Router();

router.post('/comprar', new ClientAssetController().purchase);
router.post('/vender', new ClientAssetController().sale);

export default router;
