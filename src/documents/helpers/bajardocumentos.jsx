export const BajarDocument = async (event) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `https://apiecl.com/bajardocuments?key1=${event}`,
    requestOptions
  );
  const respuesta = response.text();
  return respuesta;
 
};
