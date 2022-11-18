import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/users', usersController.insertUser.bind(usersController));
// usersRouter.get('/products', usersController.getAll.bind(usersController));

export default usersRouter;