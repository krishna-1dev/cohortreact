import React, { useState } from 'react'
import ProductsCard from './ProductsCard';
const App = () => {
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      description: "High-quality wireless headphones with noise cancellation and long battery life."
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 3499,
      description: "RGB mechanical keyboard with tactile switches and a durable design."
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Footwear",
      price: 1999,
      description: "Lightweight running shoes designed for comfort and everyday workouts."
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Electronics",
      price: 4999,
      description: "Smartwatch with fitness tracking, heart rate monitoring, and notifications."
    },
    {
      id: 5,
      name: "Leather Wallet",
      category: "Fashion",
      price: 899,
      description: "Premium leather wallet with multiple card slots and a compact design."
    },
    {
      id: 6,
      name: "Water Bottle",
      category: "Accessories",
      price: 499,
      description: "Stainless steel insulated water bottle that keeps drinks cold or hot."
    },
    {
      id: 7,
      name: "Gaming Mouse",
      category: "Electronics",
      price: 1499,
      description: "Ergonomic gaming mouse with adjustable DPI and customizable RGB lighting."
    },
    {
      id: 8,
      name: "Denim Jacket",
      category: "Clothing",
      price: 2299,
      description: "Classic blue denim jacket suitable for casual and everyday outfits."
    },
    {
      id: 9,
      name: "Backpack",
      category: "Bags",
      price: 1799,
      description: "Spacious everyday backpack with laptop storage and multiple compartments."
    },
    {
      id: 10,
      name: "Sunglasses",
      category: "Fashion",
      price: 1199,
      description: "Stylish UV-protected sunglasses with a lightweight frame."
    }
]);
// console.log(productsData);

const deleteProduct = (id) => {
  // console.log('hey i am deleted', id);
  let products = productsData.filter((elem) => elem.id !==id);
  // console.log(products);
  setProductsData(products);
}



  return (
    <div>
      <h1>hey now data rendering...</h1>

      {
        /*productsData.map((elem) => {
          return <h1 key={elem.id}>{elem.name}</h1>
        })*/
      }

      <div className='flex flex-wrap gap-3'>
        {/* <ProductsCard /> */}
        {productsData.map((elem) => {
          return <ProductsCard key={elem.id} product={elem} del={deleteProduct}/>
        })}
      </div>
    </div>
  )
}

export default App;
