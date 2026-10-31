import React, {useState} from 'react'

const App = () => {
  console.log("app is rendering...");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "krishna",
  });
  // console.log(user);
  // let handleClick = () => {
    // setCount(1);
  // }

  return (
    <div>
      <h1>hello</h1>
      <h2>count is {count} </h2>
      <h2>name is {user.name} </h2>
      <button onClick={() => {
        setCount(count+1);
      }}>counting</button>
      <button onClick={() => {
        user.name = "Shree";
      }}>Change name</button>
    </div>
  )
}

export default App;
