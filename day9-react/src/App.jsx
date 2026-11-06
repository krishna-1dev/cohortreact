import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'

const App = () => {
  
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || [];
  });
  console.log(users);


  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
      <Navbar setToggle={setToggle}/>

      {toggle ? 
      <div className='flex gap-4'>
        {users.map((elem,index) => {
          return <Usercard key={index} user={elem} setToggle={setToggle}/>
        })}
      </div>
       : <div className='flex justify-center items-center h-[70%]'>
        <Form setUsers={setUsers} setToggle={setToggle} users ={users}/></div>}
    </div>
  );
};

export default App;
