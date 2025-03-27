import React, { useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'


const Signup = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const handleSignup = async (e) => {
    e.preventDefault()
    if (!fullName) {
      setError('Your full name is required')
      return
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }
    if (!password) {
      setError('Password is required')
      return
    }
    setError("")
    //Signup API call
  }
  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>
        <form onSubmit={handleSignup}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

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
              className='' />
            <div className='col-span-2'>
              <Input
                type="password"
                placeholder=""
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='' />
            </div>

          </div>
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
          <button type='submit' className='btn-primary '>
            SIGN UP
          </button>
          <p className='text-[13px] text-slate-800 mt-3'>
            Already have an account?
            <Link className='text-purple-500 cursor-pointer font-medium underline'
              to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Signup