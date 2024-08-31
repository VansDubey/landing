import React from 'react'
import AuthenticationForm from './AuthenticationForm'

const LoginProfessional = () => {
  return (
    <div>
        <div className="flex justify-evenly items-center border p-20 m-20 gap-9 rounded-md">
            <div className="w-1/2 flex flex-col justify-center items-center gap-5 text-xl">
                <p className="font-bold text-2xl">Let's Get Started</p>
                <p>Manage your practice effortlessly .Log in to handle client assessments , apponiments, and optimize your workflow with Serene Minds.</p>
            
            </div>
            <div className="w-1/2">
            <AuthenticationForm/>
            </div>
          

        </div>

      
    </div>
  )
}

export default LoginProfessional
