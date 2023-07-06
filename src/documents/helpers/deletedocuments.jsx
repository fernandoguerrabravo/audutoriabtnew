export const DeleteDocument = async (event) => {
   
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
    fetch(`https://apiecl.com/deletedocuments?key1=${event}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  
  
  