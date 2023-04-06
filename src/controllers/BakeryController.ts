import { Request, Response } from 'express';

import BakeryService from '../services/BakeryService';

import { IBakeryService } from '@/interfaces/bakery/IBakeryService';

class BakeryController {
  constructor(private readonly service: IBakeryService) {}

  public async create(req: Request, res: Response): Promise<Response> {
    const data = await this.service.create(req.params.order);
    return res.status(200).json(data);
  }
}

export default new BakeryController(BakeryService);
