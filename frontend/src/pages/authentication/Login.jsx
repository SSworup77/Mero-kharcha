import React, { useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    if(!validateEmail(email)){
      setError('Please enter a valid email address')
      return
    }
    if(password.length < 8){
      setError('Password must be at least 8 characters')
      return
    }
    if(!password){
      setError('Password is required')
      return
    }
    setError("")
    //Login API call
  }
  return (
    <AuthLayout>
        <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
            <h3 className='text-xl font-semibold text-black'>Welcome back</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                Please enter your details to log in
            </p>
            <form onSubmit={handleLogin}>
              <Input
                type="text"
                placeholder="john@example.com"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=''/>
                <Input
                type="password"
                placeholder=""
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=''/>
                {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                <button type='submit' className='btn-primary '>
                  LOGIN
                </button>
                <p className='text-[13px] text-slate-800 mt-3'>
                  Don't have an account? 
                  <Link className='text-purple-500 cursor-pointer font-medium underline'
                  to='/signup'>Sign up</Link>
                </p>
            </form>
        </div>
    </AuthLayout>
  )
}

export default Login