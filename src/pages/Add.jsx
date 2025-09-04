import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
const add = ({ token }) => {
  const [image1,setImage1]=useState(false)
  const [image2,setImage2]=useState(false)
  const [image3,setImage3]=useState(false)
  const [image4,setImage4]=useState(false)

  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [category,setCategory]=useState("Men")
  const [subCategory,setSubCategory]=useState("Topwear")
  const [price,setPrice]=useState(0)
  const [sizes,setSizes]=useState([])
  const [bestseller,setBestseller]=useState(false)
const onSubmitHandler=(e)=>{
  e.preventDefault()
try {
    const formData=new FormData()
    formData.append('name',name)
    formData.append('description',description)
    formData.append('category',category)
    formData.append('subCategory',subCategory)
    formData.append('price',price)
    formData.append('sizes',JSON.stringify(sizes))
    formData.append('bestseller',bestseller)
    if(image1) formData.append('image1',image1)
    if(image2) formData.append('image2',image2)
    if(image3) formData.append('image3',image3)
    if(image4) formData.append('image4',image4)

    axios.post(backendUrl+'/api/product/add',formData,{headers:token})
} catch (error) {
  
}
}
  return (
    <form className='flex flex-col flex-start gap-4' onSubmit={onSubmitHandler}>
      <div>
        <p className='mn-2'>Upload Image:</p>
  <div className='flex gap-2 '>
    <label htmlFor="image1">
      <img  className='w-20' src={!image1?assets.upload_area:URL.createObjectURL(image1)} alt="" />
      <input onChange={(e)=>setImage1(e.target.files[0])}  type="file" name="" id="image1" hidden />
    </label>
    <label htmlFor="image2">
      <img  className='w-20' src={!image2?assets.upload_area:URL.createObjectURL(image2)} alt="" />
      <input  onChange={(e)=>setImage2(e.target.files[0])} type="file" name="" id="image2" hidden />
    </label>
    <label htmlFor="image3">
      <img className='w-20'  src={!image3?assets.upload_area:URL.createObjectURL(image3)} alt="" />
      <input  onChange={(e)=>setImage3(e.target.files[0])} type="file" name="" id="image3" hidden />
    </label>
    <label htmlFor="image4">
      <img  className='w-20' src={!image4?assets.upload_area:URL.createObjectURL(image4)} alt="" />
      <input onChange={(e)=>setImage4(e.target.files[0])}  type="file" name="" id="image4" hidden />
    </label>
  </div>
      </div>
      <div>
        <p>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)}value={name} className='w-full max-w-[500px] px-3 py-2 '  type="text" placeholder='Name' required/>
      </div>
      <div>
        <p>Product description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 '  placeholder='Description' required/>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div> 
          <p className='mb-2 '>Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)}  className=' px-3 py-2' required>
            <option value="">Select category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p  className='mb-2 '>Product subCategory</p>
          <select onChange={(e)=>setSubCategory(e.target.value)}  className=' px-3 py-2'  required>
            <option value="">Select subCategory</option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} type="number" placeholder='0' />
        </div>
       
      </div>
       <div className='flex gap-2'>
          <p>
          Product Sizes
          </p>
          <div onClick={()=>setSizes((prev)=>prev.includes("S")?prev.filter(item=>item !=='S'): [...prev,"S"])}>
            <p  className={`bg-slate-200 px-3 py-1 cursor-pointer w-12  rounded-2xl flex items-center justify-center ${sizes.includes("S")?"bg-pink-700  text-white":""}`}>S</p>
          </div>
          <div onClick={()=>setSizes((prev)=>prev.includes("M")?prev.filter(item=>item !=='M'): [...prev,"M"])}>
            <p className={`bg-slate-200 px-3 py-1 cursor-pointer w-12  rounded-2xl flex items-center justify-center ${sizes.includes("M")?"bg-pink-700 text-white":""}`}>M</p>
          </div>
          <div onClick={()=>setSizes((prev)=>prev.includes("XL")?prev.filter(item=>item !=='XL'): [...prev,"XL"])}>
            <p className={`bg-slate-200 px-3 py-1 cursor-pointer w-12  rounded-2xl flex items-center justify-center ${sizes.includes("XL")?"bg-pink-700 text-white":""}`}>XL</p>
          </div>
          <div onClick={()=>setSizes((prev)=>prev.includes("XXL")?prev.filter(item=>item !=='XXL'): [...prev,"XXL"])}>
            <p className={`bg-slate-200 px-3 py-1 cursor-pointer w-12 rounded-2xl flex items-center justify-center  ${sizes.includes("XXL")?"bg-pink-700 text-white":""}`}>XXL</p>
          </div>
        </div>
        <div>
          <input className='mr-3' onChange={()=>setBestseller((prev)=>!prev)} checked={bestseller} type="checkbox" name="" id="bestseller" />
          <label htmlFor="bestseller">Bestseller</label>
        </div>
        <button className='bg-black w-28 text-white px-4 py-2 rounded' type='submit '>Add </button>
    </form>
  )
}

export default add