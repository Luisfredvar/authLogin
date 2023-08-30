import { createContext, useState, useContext } from 'react';
import React from 'react'
import {useForm} from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function RegisterPage() {

const {register, handleSubmit, formState: {errors}} = useForm();
const {signup, isAuthenticathed, errors : RegisterErrors} = useAuth(); 
const navigate = useNavigate();

useEffect(()=>{
  if(isAuthenticathed) navigate('/tasks');
},[isAuthenticathed, navigate])

const onSubmited = handleSubmit( async(values)=>{
  signup(values)// console.log(values)
})

  return (

    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className=' bg-zinc-800 max-w-md p-10 rounded-md'>

       {
        RegisterErrors.map((error, i)=>
          <div className='bg-red-500 text-white p-2 mt-2' key={i}>
          {error}
          </div>
        )
       }

       <form onSubmit={onSubmited}>
        <input type="text" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2'{...register('username', {required:true})} placeholder='Ingrese Usuario' />
        {
          errors.username && <p className='text-yellow-500'>Nombre de Usuario es requerido</p>
        }

        <input type="email" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2' {...register('email', {required:true})} placeholder='Ingrese Email'/>
        {
          errors.email && <p className='text-yellow-500'>Email es requerido</p>
        }


        <input type="password" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2' {...register('password', {required:true})} placeholder='Ingrese Password'/>
        {
          errors.password && <p className='text-yellow-500'>Password es requerido</p>
        }


         <div className='text-center'>
         <button type='submit' className='bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-5 rounded'>Register</button>
         </div>
        
       </form>
    </div>
    </div>
  )
}

export default RegisterPage
