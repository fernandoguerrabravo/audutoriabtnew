
export const Updateregister = async (id,amazonemail, auth0) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({"id":id, "email": amazonemail, "auth0": auth0});
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    return new Promise((resolve, reject) =>{ 
      fetch("https://apiecl.com/registro", requestOptions)
      .then(response => console.log(response.text()))
      .then(resolve)
      .catch(reject)
    })
  }