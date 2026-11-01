import React, {useState} from 'react'

const Register = ({setToggle,setUsers}) => {
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", image: ""
  });

  // console.log(users);

  const handleChange = (e) => {
    let {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    // users.push(formData);
    setUsers(prev=> [...prev, formData]);
    // console.log(users);
    setFormData({
      name: "", email: "", password:"", image: ""
    })
  }

  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input required onChange={handleChange} type="text" placeholder='name' className='p-2 border border-gray-400 rounded' name='name' value={formData.name}/>
        <input required onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder='email' name='email' value={formData.email}/>
        <input required onChange={handleChange} className='p-2 border border-gray-400 rounded' type="password" placeholder='password' name='password' value={formData.password}/>
        <input type="url" placeholder='image' name='image' onChange={handleChange}
        value={formData.image} className='p-2 border-gray-400 rounded' />
        <button className='p-2 bg-blue-600 text-white rounded'>Register</button>
      </form>
      <p>Already have an account?
         <span onClick={() => setToggle((prev) => !prev)} className='text-blue-600 cursor-pointer'>Login here
          </span>
      </p>
    </div>
  )
}

export default Register;
