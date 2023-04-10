import * as cors from 'cors';
import * as express from 'express';

import bakeryRoutes from './routes/BakeryRoutes';
import baseRoutes from './routes/HomeRoutes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(baseRoutes);
    this.express.use('/bakery', bakeryRoutes);
  }
}

export default new App().express;
