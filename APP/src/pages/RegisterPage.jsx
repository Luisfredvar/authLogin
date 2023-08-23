import { createContext, useState, useContext } from 'react';
import React from 'react'
import {useForm} from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function RegisterPage() {

const {register, handleSubmit, formState: {errors}} = useForm();
const {signup, isAuthenticathed, errors: {RegisterErrors}} = useAuth(); 
const Navigate = useNavigate();

useEffect(()=>{
  if(isAuthenticathed) Navigate('/tasks')
},[isAuthenticathed, Navigate])
  return (
    <div className='flex justify-center justify-items-center bg-zinc-800 max-w-md p-10 rounded-md'>
       <form onSubmit={handleSubmit(async(values)=>{
        // console.log(values)
        signup(values)
       
        })}>
        <input type="text" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2'{...register('username', {required:true})} placeholder='Ingrese Usuario' />
        <input type="email" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2' {...register('email', {required:true})} placeholder='Ingrese Email'/>
        <input type="password" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2' {...register('password', {required:true})} placeholder='Ingrese Password'/>
         <div className='text-center'>
         <button type='submit' className='bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>Register</button>
         </div>
        
       </form>
    </div>
  )
}

export default RegisterPage
