const GetProducts = async (categoria, text) => {
	
	const requestOptions = {
		method: "GET",
	  };
	
	  const response = await fetch(
		`https://apiecl.com/spec?categoria=${categoria}&text=${text}`,
		requestOptions
	  );
	  const respuesta = response.json();
	  console.log(respuesta);
	  return respuesta;
};

export default GetProducts;
