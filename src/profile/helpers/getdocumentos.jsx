export const GetDocumentos = async (clave) => {
  
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `https://apiecl.com/getdocuments?id_seller=${clave}`,
    requestOptions
  );
  const respuesta = response.json();
  return respuesta;
};
