import Http from '@/infra/http/Http';
import { IBakeryService } from '@/interfaces/bakery/IBakeryService';

export default class BakeryController {
  constructor(private readonly http: Http, private readonly service: IBakeryService, private prefix = '') {
    this.init();
  }

  private init() {
    this.http.on('post', `${this.prefix}/order`, async (params: any, body: any) => {
      return await this.service.create(body.order);
    });
  }
}
