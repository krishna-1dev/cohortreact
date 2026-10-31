import React, { useState } from "react"


const web = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  console.log(name);
  console.log(email);
  console.log(pass);
  return (

    //this is a brute force method in which number os useStates is depend on number of inputs
    <div className='flex flex-col gap-5 w-60'>
      <input onChange={(e) => setName(e.target.value)} className="border-2" type="text" placeholder="Name" />
      {/* <input onChange={(e) => console.log(e.target.value)} className='border-2' type="text" placeholder='Name'  /> */}
      <input  onChange={(e) => setEmail(e.target.value)} className='border-2' type="text" placeholder='Email' />
      <input  onChange={(e) => setPass(e.target.value)} className='border-2' type="text" placeholder='Password' />
      {/* <button>Submit</button> */}
      <h1>this is {name}</h1>
      <h1>this is {email}</h1>
      <h1>this is {pass}</h1>
    </div>
  )
}

export default web
