import { Router, Request, Response } from 'express';

import BakeryController from '@/controllers/BakeryController';

const routes = Router();

routes.post('/order', (req: Request, res: Response) => BakeryController.create(req, res));

export default routes;
