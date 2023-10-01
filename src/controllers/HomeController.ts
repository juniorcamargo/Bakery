import Http from '@/infra/http/Http';

export class HomeController {
  constructor(private readonly http: Http, prefix = '') {
    this.http.on('get', `${prefix}/`, async () => {
      return 'Welcome to my Bakery API';
    });
  }
}
