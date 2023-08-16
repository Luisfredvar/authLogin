import React from 'react'
import {useForm} from 'react-hook-form'

function RegisterPage() {

const {register, handleSubmit} = useForm();

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
       <form onSubmit={handleSubmit(async(values)=>{console.log(values)})}>
        <input type="text" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2'{...register('username', {required:true})} placeholder='Ingrese Usuario' />
        <input type="email" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2' {...register('email', {required:true})} placeholder='Ingrese Email'/>
        <input type="password" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2' {...register('password', {required:true})} placeholder='Ingrese Password'/>
        <input type="password" className='bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 rounded text-center'{...register('password', {required:true})} placeholder='Ingrese Password'/>
        <button type='submit'></button>
       </form>
    </div>
  )
}

export default RegisterPage