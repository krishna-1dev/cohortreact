import axios from 'axios'
import React from 'react'

const App = () => {
  const getProductsData = async() => {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data); //data is in the promise 
    } catch(error) {
      console.log("error in API", error);
    }
  }
  getProductsData();
  
  return (
    <div>
     <h1>hello friends</h1>
    </div>
  );
};

export default App;
