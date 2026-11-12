import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  console.log("app rendering");
  return (
    <div>
      <h1>this is app component</h1>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
};

export default App;
