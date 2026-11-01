import React from 'react'

const ACard = ({user}) => {
  return (
    <div>
      <div className='p-4 border-gray-400 border rounded bg-white flex flex-col gap-4'>
        <div className='w-50 h-40 rounded overflow-hidden'>
          <img src={user.image} alt="" className='h-full w-full'/>
        </div>
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
        <button>delete</button>
      </div>
    </div>
  )
}

export default ACard
