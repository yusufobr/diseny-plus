import React from 'react'
import logo from './../assets/images/logo.png'

function Header() {
  return (
    <div className='container p-4 flex justify-between mx-auto max-w-screen-xl'>
        <div>
        <img src={logo} title='Diseny logo' className='w-20 md:w-32 object-contain'/>
        </div>
        <div>
            <nav></nav>
        </div>
    </div>
  )
}

export default Header