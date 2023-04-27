import React from 'react'

const Logo = ({ size, blur }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className='flex items-center justify-center relative group'
    >
      <div className='dark:bg-primary-dark bg-blue-200 dark:group-hover:bg-yellow-400 group-hover:bg-blue-400 transition-all w-1/2 h-1/2 rounded-full' />
      <div
        style={{
          backgroundColor: 'hsla(0,0,0,.3)',
          backdropFilter: `blur(${blur}px)`,
        }}
        className='w-full h-1/2 absolute top-1/2'
      />
    </div>
  )
}

export default Logo
