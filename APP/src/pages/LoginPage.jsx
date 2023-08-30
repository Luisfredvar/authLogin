import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext';

function LoginPage() {

  const {register, handleSubmit, formState : {errors}} = useForm();

  const {signin, errors: singninErros }= useAuth()

  const onSubmited = handleSubmit( async(data)=>{
    signin(data)// console.log(data)
  })

  return (

   <div className='flex h-[calc(100vh-100px)] items-center justify-center'> 

   <div className=' bg-zinc-800 max-w-md p-10 rounded-md'>

       {
        singninErros.map((error, i)=>
          <div className='bg-red-500 text-white p-2 mt-2' key={i}>
          {error}
          </div>
        )
       }

     <form onSubmit={onSubmited}>
      
        <input type="email" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2' {...register('email', {required:true})} placeholder='Ingrese Email'/>
        {
          errors.email && <p className='text-yellow-500'>Email es requerido</p>
        }


        <input type="password" className='w-full bg-zinc-600 rounded-md py-4 px-4 my-2' {...register('password', {required:true})} placeholder='Ingrese Password'/>
        {
          errors.password && <p className='text-yellow-500'>Password es requerido</p>
        }


         <div className='text-center'>
         <button type='submit' className='bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-10 rounded'>Login</button>
         </div>
        
       </form>
   </div>
   </div>
  )
}

export default LoginPage
