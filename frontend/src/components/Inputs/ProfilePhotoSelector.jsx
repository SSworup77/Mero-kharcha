import React, { useRef, useState } from 'react'
import { LuUser,LuUpload,LuTrash } from 'react-icons/lu'


const ProfilePhotoSelector = ({image,setImage}) => {
  const inputRef=useRef(null)
  const [previewUrl,setPreviewUrl]=useState(null)
  
  const handleImageChange=(event)=>{
    const file=event.target.files[0]
    if(file){
      setImage(file)
      const preview = URL.createObjectURL(file)
      setPreviewUrl(preview)
    }
  }
  const handleRemoveImage=()=>{
    setImage(null)
    setPreviewUrl(null)
  }
  const onChooseFile=()=>{
    inputRef.current.click()
  }
  return (
    <div className='flex justify-center mb-6'>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleImageChange}
        />
        {!image?(
          <div className='w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center relative'>
            <LuUser className='text-4xl text-primary'/>

            <button
              type='button'
              onClick={onChooseFile}
              className='w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full absolute -bottom-1 -right-1 cursor-pointer'>
                <LuUpload/>
              </button>
          </div>
        
          ):(<div className='relative'>
            <img
            src={previewUrl}
            alt='profile picture'
            className='w-20 h-20 rounded-full object-cover'
            />
            <button
            type='button'
            onClick={handleRemoveImage}
            className='w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-full absolute -bottom-1 -right-1 cursor-pointer'
            >
              <LuTrash/>
            </button>

          </div>
        )}

    </div>
  )
}

export default ProfilePhotoSelector