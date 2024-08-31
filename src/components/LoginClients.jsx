import React from 'react'
import AuthenticationForm from './AuthenticationForm'

const LoginClients = () => {
  return (
   <>
    <div className="flex items-center justify-between p-20 m-20 gap-9 rounded-md border">
               <div className="w-1/2">
            <AuthenticationForm/>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center gap-5 text-xl">
                <p className="font-bold text-2xl">Glad You're Here!</p>
                <p>Take the next step towards better mental health.Log in to access your assessments,book appointments, and stay connected with your counselor.</p>
            </div>

            </div>

   
   </>
      
           
     
    
  )
}

export default LoginClients
