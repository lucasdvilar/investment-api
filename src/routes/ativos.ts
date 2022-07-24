import { Router } from "express";
import AssetController from "../controllers/Asset";
import auth from "../middlewares/auth";
import validateId from "../middlewares/validateId";

const router = Router();

router.get('/cliente/:id', auth, validateId)
router.get('/:id', new AssetController().getById);

export default router;
