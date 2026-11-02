import React, {useRef, useState} from 'react'

const Form = () => {
  console.log("form rerendering...")
  const [products, setProducts] = useState();
  console.log('this is products: ',products);
  const formRef = useRef({});
  console.log(formRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.productName.value);
    console.log(formRef.current.price.value);
    console.log(formRef.current.category.value);
    console.log(formRef.current.image.value);
    // console.log(formData);

    let obj = {
    pName: formRef.current.productName.value,
    price: formRef.current.price.value,
    category: formRef.current.category.value,
    image: formRef.current.image.value,
    };
    setProducts(obj);
  }

  

  return (
    <div className='w-80'>
      <form 
      onSubmit={handleSubmit}
      className='flex p-6 rounded bg-white flex-col gap-4'>

        <input 
        ref={(e) => formRef.current.productName=e}
        // onChange={(e) => setFormData({...formData, productName: e.target.value})}
        className='p-2 border border-gray-400 rounded' type="text" placeholder='product name' />

        <input 
        ref ={(e) => formRef.current.price=e}
        // onChange={(e) => setFormData({...formData, price: e.target.value})} 
        className='p-2 border border-gray-400 rounded' type="number" placeholder='price'/>

        <span>Select category</span>
        <select
        ref={(e) => formRef.current.category=e} 
        // onChange={(e) => setFormData({...formData, category: e.target.value})}
        className='p-2 border border-gray-400 rounded'>
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>

        <input 
        ref={(e) => formRef.current.image=e}
        // onChange={(e) => setFormData({...formData, image: e.target.value})}
        type="url" placeholder='image' className='p-2 border border-gray-400 rounded'/>

        <button className='p-2 bg-blue-600 text-white border rounded'>CREATE</button>
      </form>
    </div>
  )
}

export default Form
