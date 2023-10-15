// Add your code here
const BASE_URL = "http://localhost:3000/users"
const submitData = {
    userName: "",
    userEmail: "",
  };
  


const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      dogName: "",
      dogBreed: "",
    }),
  };
  
  fetch("http://localhost:3000/users", )
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
      })
      .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });
