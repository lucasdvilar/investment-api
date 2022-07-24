import { Router } from "express";
import AssetController from "../controllers/Asset";

const router = Router();

router.get('/:id', new AssetController().getById);

export default router;
