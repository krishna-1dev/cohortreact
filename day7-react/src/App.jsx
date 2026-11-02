import React, { useRef } from 'react'
import Form from './components/Form'
import RHF from './components/RHF'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-500 p-5 flex flex-col justify-center items-center'>
      <h1 className='m-8'>This is app component</h1>
      {/* <Form/> */}
      <RHF/>
    </div>
  )
}

export default App
