import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlewares/login.validation';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.use('/login', validateLogin, loginController.login.bind(loginController));

export default loginRouter;