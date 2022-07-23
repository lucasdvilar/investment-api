import { Router } from 'express';
import ClientController from '../controllers/Client';

const router = Router();

router.post('/', new ClientController().login);

export default router;
