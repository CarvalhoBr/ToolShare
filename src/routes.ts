// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express';
import UserController from './controllers/UserController';

const routes = express.Router();

const userController = new UserController();

routes.post('/users/create', userController.create);
routes.post('/users/authenticate', userController.authenticate)

export default routes;
