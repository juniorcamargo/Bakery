import { Router, Request, Response } from 'express';

import BakeyController from '@/controllers/BakeryController';

const routes = Router();

routes.post('/order', (req: Request, res: Response) => BakeyController.create(req, res));

export default routes;
