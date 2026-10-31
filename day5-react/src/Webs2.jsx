import React, {useState} from 'react'

const Form = () => {
  //this is a better version of brute force because in this we do not have to create multiple useStates but the only setback is we have to assign multiple setValues
  const [formData, setFormData] = useState({
    // name: "", email: "", password: "",
  });
  console.log(formData);
  return (
    <div className='flex flex-col gap-5 w-60'>
      <input onChange={(e) => setFormData({...formData, name: e.target.value})} className='border-2' type="text" placeholder='name' />
      <input onChange={(e) => setFormData({...formData, email:e.target.value})} className='border-2' type="text" placeholder='email' />
      <input onChange={(e) => setFormData({...formData, password: e.target.value})} className='border-2' type="text" placeholder='password' />
    </div>
  )
}

export default Form;
