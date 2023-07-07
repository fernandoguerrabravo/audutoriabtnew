import { Hasher } from '../helpers/hasher';
import HttpClient from '../helpers/provider.helper';


export class UserProviders {
  httpClient = HttpClient;

  async SignIn (body) {
    const resp = await this.httpClient.post('https://api.bt.stratego.cl/users/sign_in?pd=true', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      },
    });
    const sku = await resp.data;
    return sku;
  }
  async createUser (body) {
    const resp = await this.httpClient.post('https://api.bt.stratego.cl/users/create?pd=true', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      },
    });
    const sku = await resp.data;
    return sku;
  }
  async getMail () {
    const user = localStorage.getItem('accessDataToken');
    const data = JSON.parse(Hasher.decode.Base64(user))
    const body = {
      'mail': data.mail,
      'userName': data.name
    }
    return body
  }
}
