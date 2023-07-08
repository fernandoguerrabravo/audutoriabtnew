/* eslint-disable import/prefer-default-export */
export const GetSeller = async cliente => {
  
   
    const requestOptions = {
          method: 'GET',
          redirect: 'follow'
          
      };
  
    const response = await fetch(
      `https://apiecl.com/getsellernew?id_seller=${cliente}`,
      requestOptions
    );
    const respuesta = response.json();
   
    return respuesta;
  };
  