import React, { useEffect } from "react";

/*
Async function does the below: 

1.lets to skip adding "then" part to a promise function right away, instead it will wait for the action to get completed via "await".

2.without the use of Async function, below could be used, but if their is delay in the network, then the fetch will fail-

fetch(baseUrl + endpoint).then((response) => {
    console.log(response.json());
});
*/

const API = async (endpoint) => {
  let baseUrl = "https://jsonplaceholder.typicode.com/";
  const response = await fetch(baseUrl + endpoint);
  const data = await response.json();
  return data;
};

function App() {
  useEffect(() => {
    API("users").then(console.log);
  }, []);

  return <div className="App">check the console</div>;
}

export default App;
