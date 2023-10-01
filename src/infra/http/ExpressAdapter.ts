import cors from 'cors';
import express, { Request, Response } from 'express';

import Http from './Http';

export class ExpressAdapter implements Http {
  public readonly app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
  }

  public on(method: string, url: string, callback: Function): void {
    this.app[method](url, async (req: Request, res: Response) => {
      const output = await callback(req.params, req.body);
      res.json(output);
    });
  }

  public run(baseUrl = 'http://localhost', port: number): void {
    this.app.listen(port, () => {
      console.log(`*** Server started on  ${baseUrl}:${port} ***`);
    });
  }
}
