import React, { useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate=useNavigate()

  const handleLogin = async (e) => {

  }
  return (
    <AuthLayout>
        <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
            <h3 className='text-xl font-semibold text-black'>Welcome back</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                Please enter your details to log in
            </p>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=''/>
            </form>
        </div>
    </AuthLayout>
  )
}

export default Login