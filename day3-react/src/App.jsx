import React from 'react'
import { useState } from 'react';


const App = () => {
  let [count, setCount] = useState(0);
  console.log(count)
  /*let btn = document.querySelector("#btn");
  btn.addEventListener('click', () => {
    count++;
  });*/

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => {
        /*count++;
        console.log(count);*/
        setCount(count+1);
      }}>Increment</button>
    </div>
  );
};

export default App;
