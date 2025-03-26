import React, { useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'


const Signup = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const handleSignup = async (e) => {

  }
  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>
        <form onSubmit={handleSignup}>
          

          <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
          <Input
              type="text"
              placeholder="John Doe"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
                type="text"
                placeholder="john@example.com"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=''/>
            <div className='col-span-2'>
              <Input
                  type="password"
                  placeholder=""
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=''/>
            </div>
            
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Signup