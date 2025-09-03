import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const onSubmitHandler=async(e)=>{
try {
    e.preventDefault()
console.log(password,email);

} catch (error) {
    
}
    }
  return (
    <div className='flex items-center min-h-screen justify-center'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>ADMIN PANEL</h1>
            <form onSubmit={onSubmitHandler} >
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-null' type="text" placeholder='email' />
                    
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-null'  type="password" placeholder='password' />

                </div>
               <button  className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login