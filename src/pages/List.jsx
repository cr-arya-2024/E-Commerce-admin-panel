import React from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
const List = ({token}) => {
  const [list, setList] = useState([])
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      toast.error(error.response?.data?.message || 'Failed to fetch products')
    }
  }
  const removeProduct = async (id) => {
    try {
      const res = await axios.post(backendUrl + `/api/product/remove`, { id }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      if (res.data.success) {
        toast.success(res.data.message)
        await fetchList()
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.error('Error removing product:', error)
      toast.error(error.response?.data?.message || 'Failed to remove product')
    }
  }
  useEffect(() => {
    fetchList()

    // 
  }, [])
  return (
    <div>
      <p className='mb-2'>All products</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'><b>image</b>
        <b>name</b>
        <b>Price</b>
        <b>Action</b>
        </div>
      </div>
      {
        list.map((item,index)=>(
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
            <img className='w-12' src={item.image[0]} alt="item image" />
<p>{item.name}</p>

<p>{item.price}</p>
<p className='ml-4 cursor-pointer' onClick={()=>removeProduct(item._id)}>X</p>
          </div>
        ))
      }
    </div>
  )
}

export default List