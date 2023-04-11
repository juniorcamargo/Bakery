import { Request, Response } from 'express';

import BakeryService from '../services/BakeryService';

import { IBakeryService } from '@/interfaces/bakery/IBakeryService';

class BakeryController {
  constructor(private readonly service: IBakeryService) {}

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.service.create(req.body.order);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json('invalid payload');
    }
  }
}

export default new BakeryController(BakeryService);
