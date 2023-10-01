import './config';
import BakeryController from './controllers/BakeryController';
import { HomeController } from './controllers/HomeController';
import { ExpressAdapter } from './infra/http/ExpressAdapter';
import { BakeryService } from './services/BakeryService';

const port = process.env.PORT ? parseInt(process.env.PORT) : 3033;
const baseUrl = process.env.BASE_URL || 'http://localhost';

const http = new ExpressAdapter();

new HomeController(http);
new BakeryController(http, new BakeryService(), '/bakery');

http.run(baseUrl, port);
