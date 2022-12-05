import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import usersClasse from '../middlewares/users.classe.validation';
import usersLevel from '../middlewares/users.level.validation';
import usersPassword from '../middlewares/users.password.validation';
import usersUsername from '../middlewares/users.username.validation';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
  '/users',
  usersUsername,
  usersClasse,
  usersLevel,
  usersPassword,
  usersController.insertUser.bind(usersController),
);
// usersRouter.get('/products', usersController.getAll.bind(usersController));

export default usersRouter;