import { BACKEND } from '../helpers/common.helper';
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
}


// export const SignIn = async (body) => {
//   const requestOptions = {
//     method: 'POST',
//     redirect: 'follow',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     'Access-Control-Allow-Origin': 'POST',
//     body: JSON.stringify(body)
//   };
//   // const resp = await fetch(`${BACKEND ? BACKEND : 'https://preproc.bt.stratego.cl'}/users/sign_in?pd=true`, requestOptions);
//   const resp = await fetch(`https://preproc.bt.stratego.cl/users/sign_in?pd=true`, requestOptions);
//   const sku = await resp.json();
//   return sku;
// };

// export const createUser = async (body) => {
//   const requestOptions = {
//     method: 'POST',
//     redirect: 'follow',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     'Access-Control-Allow-Origin': 'GET',
//     body: JSON.stringify(body)
//   };
//   // const resp = await fetch(`${BACKEND ? BACKEND : 'https://preproc.bt.stratego.cl'}/users/create?pd=true`, requestOptions);
//   const resp = await fetch(`https://preproc.bt.stratego.cl/users/create?pd=true`, requestOptions);
//   const sku = await resp.json();
//   return sku;
// };

