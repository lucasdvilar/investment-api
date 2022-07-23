import { Router } from 'express';
import ClientController from '../controllers/Client';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

router.post('/', validateLogin, new ClientController().login);

export default router;
