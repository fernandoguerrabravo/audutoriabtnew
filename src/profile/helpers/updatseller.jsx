export const Updateseller = async (event) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  console.log(event)
  var raw = JSON.stringify(event);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://apiecl.com/updatesellernew", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
