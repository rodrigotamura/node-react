import { Router } from 'express';

import initialMiddleware from './app/middlewares/initial';
import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import FavoredsController from './app/controllers/FavoredsController';
import TransactionsController from './app/controllers/TransactionsController';

const routes = new Router();

routes.use(initialMiddleware);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.get('/favoreds', FavoredsController.index);
routes.post('/favoreds', FavoredsController.store);
routes.put('/favoreds', FavoredsController.update);
routes.delete('/favoreds/:favored_id', FavoredsController.remove);
routes.get('/favoreds/:favored_id', FavoredsController.show);

routes.get('/transactions', TransactionsController.index);

export default routes;
