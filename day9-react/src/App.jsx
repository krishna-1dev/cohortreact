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
  const [updatedUser, setUpdatedUser] = useState(null);
  console.log("updated data", updatedUser);

  const deleteUser = (id) => {
    // console.log(id);
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    console.log(filterUser);
    setUsers(filterUser);
    localStorage.setItem('users', JSON.stringify(filterUser));
  };


  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
      <Navbar setToggle={setToggle}/>

      {toggle ? 
      <div className='flex gap-4 flex-wrap'>
        {users.map((elem,index) => {
          return <Usercard 
           key={index}
           user={elem} 
           setToggle={setToggle} 
           deleteUser={deleteUser}
           ind={index}
           setUpdatedUser={setUpdatedUser}/>
        })}
      </div>
       : <div className='flex justify-center items-center h-[70%]'>
        <Form setUsers={setUsers} setToggle={setToggle} users ={users} updatedUser={updatedUser}/></div>}
    </div>
  );
};

export default App;
