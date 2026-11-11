
  import React, { useState } from 'react'

  const Cart = ({ cartItems }) => {

  const [quantities, setQuantities] = useState({})

  const updateQuantity = (id, change) => {
  setQuantities(prev => ({
  ...prev,
  [id]: Math.max(1, (prev[id] || 1) + change)
  }))
  }

  const getQuantity = (id) => quantities[id] || 1

  const totalPrice = cartItems.reduce((total, item) => {
  return total + item.price * getQuantity(item.id)
  }, 0)

  return (
  <div className='min-h-screen bg-gray-100 px-5 py-10 md:px-12'>

  <div className='max-w-7xl mx-auto'>

  <h1 className='text-3xl font-bold text-gray-800 mb-2'>
  Shopping Cart
  </h1>

  <p className='text-gray-500 mb-8'>
  You have {cartItems.length} items in your cart
  </p>

  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

  {/* Cart Products */}

  <div className='lg:col-span-2 flex flex-col gap-5'>

  {cartItems.length > 0 ? (

    cartItems.map((item, index) => (

      <div
        key={`${item.id}-${index}`}
        className='bg-white rounded-2xl p-5 flex flex-col sm:flex-row gap-6 shadow-sm'
      >

        {/* Product Image */}

        <div className='bg-gray-50 rounded-xl h-44 sm:w-44 flex items-center justify-center p-5 shrink-0'>

          <img
            src={item.image}
            alt={item.title}
            className='w-full h-full object-contain'
          />

        </div>

        {/* Product Details */}

        <div className='flex-1 flex flex-col justify-between'>

          <div>

            <p className='text-xs uppercase tracking-wider text-indigo-600 font-bold'>
              {item.category}
            </p>

            <h2 className='text-lg font-bold text-gray-800 mt-2'>
              {item.title}
            </h2>

            <p className='text-sm text-gray-500 mt-2 line-clamp-2'>
              {item.description}
            </p>

            <p className='text-amber-500 text-sm mt-3'>
              ★ {item.rating.rate}
              <span className='text-gray-400 ml-2'>
                ({item.rating.count} reviews)
              </span>
            </p>

          </div>

          <div className='flex flex-wrap items-center justify-between gap-4 mt-5'>

            {/* Quantity */}

            <div className='flex items-center border border-gray-200 rounded-lg'>

              <button
                onClick={() => updateQuantity(item.id, -1)}
                className='px-4 py-2 hover:bg-gray-100'
              >
                −
              </button>

              <span className='px-3 font-semibold'>
                {getQuantity(item.id)}
              </span>

              <button
                onClick={() => updateQuantity(item.id, 1)}
                className='px-4 py-2 hover:bg-gray-100'
              >
                +
              </button>

            </div>

            <h3 className='text-xl font-bold text-gray-900'>
              ${(item.price * getQuantity(item.id)).toFixed(2)}
            </h3>

          </div>

        </div>

      </div>

    ))

  ) : (

    <div className='bg-white rounded-2xl p-12 text-center shadow-sm'>

      <div className='text-6xl mb-5'>🛒</div>

      <h2 className='text-2xl font-bold text-gray-800'>
        Your cart is empty!
      </h2>

      <p className='text-gray-500 mt-3'>
        Looks like you haven't added anything yet.
      </p>

    </div>

  )}

  </div>

  {/* Order Summary */}

  <div className='lg:col-span-1'>

  <div className='bg-white rounded-2xl p-6 shadow-sm sticky top-24'>

    <h2 className='text-xl font-bold text-gray-800 mb-6'>
      Order Summary
    </h2>

    <div className='flex justify-between text-gray-500 mb-4'>
      <span>Subtotal</span>
      <span>${totalPrice.toFixed(2)}</span>
    </div>

    <div className='flex justify-between text-gray-500 mb-4'>
      <span>Shipping</span>
      <span className='text-green-600 font-semibold'>
        Free
      </span>
    </div>

    <div className='flex justify-between text-gray-500 mb-6'>
      <span>Tax</span>
      <span>$0.00</span>
    </div>

    <div className='border-t border-gray-200 pt-5 flex justify-between'>

      <span className='font-bold text-gray-800'>
        Total
      </span>

      <span className='text-2xl font-black text-indigo-600'>
        ${totalPrice.toFixed(2)}
      </span>

    </div>

    <button
      disabled={cartItems.length === 0}
      className='w-full mt-7 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed'
    >
      Proceed to Checkout →
    </button>

    <p className='text-xs text-center text-gray-400 mt-4'>
      Secure checkout experience
    </p>

  </div>

  </div>

  </div>

  </div>

  </div>
  )
  }

  export default Cart
