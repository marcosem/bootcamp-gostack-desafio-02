// const { Router } = require('express');
// By using the module "sucrase" you can use the syntaxe "import" instead of variable
// declaration for importing modules
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

// By using the module "sucrase" you can use the syntaxe "export default" instead of module.exports
// module.exports = routes;
export default routes;
