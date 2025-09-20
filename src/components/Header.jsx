import React from 'react'
import logo from '../assets/netflix-4.svg'

const Header = () => {
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10'>
        <img src={logo} className='w-52' alt='logo' />
    </div>
  )
}

export default Header