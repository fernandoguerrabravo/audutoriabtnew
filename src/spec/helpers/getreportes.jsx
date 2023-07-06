const GetReportes = async (categoria, idioma) => {
	
	const requestOptions = {
		method: "GET",
	  };
	
	  const response = await fetch(
		`https://apiecl.com/reporte?categoria=${categoria}&idioma=${idioma}`,
		requestOptions
	  );
	  const respuesta = await response.json();
	  return respuesta;
};

export default GetReportes;