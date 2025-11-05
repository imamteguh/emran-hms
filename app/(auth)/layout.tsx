import Image from 'next/image'
import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-1/2 h-full flex items-center justify-center'>
        {children}
      </div>
      <div className='w-1/2 h-full hidden md:flex relative'>
        <Image src="https://i.pinimg.com/1200x/fe/da/86/feda86f97d839ea44399ac90e17e3af1.jpg"
          width={1000}
          height={1000}
          alt='Doctor'
          className='w-full h-full object-cover' />
        
        <div className='absolute top-0 w-full h-full bg-black opacity-40 z-10 flex flex-col items-center justify-center'>
          <h1 className='text-3xl md:text-4xl 2xl:text-5xl font-bold text-white'>Emran HMS</h1>
          <p className='text-blue-500 text-base'>You're welcome</p>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout