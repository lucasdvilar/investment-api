import { Router } from 'express';
import AssetController from '../controllers/Asset';
import ClientAssetController from '../controllers/ClientAsset';
import auth from '../middlewares/auth';
import validateId from '../middlewares/validateId';

const router = Router();

router.get('/cliente/:id', auth, validateId, new ClientAssetController().getByClientId);
router.get('/:id', new AssetController().getById);

export default router;
