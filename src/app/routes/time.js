import { Router } from 'express';
import TimeController from '../controllers/TimeController';

const routes = new Router();

routes.get('/times', TimeController.index);
routes.get('/times/:id', TimeController.show);
routes.get('/teste', TimeController.teste);

export default routes;