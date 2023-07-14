import React from 'react'

function HeaderItem(pros) {
    const {name, Icon} = pros
  return (
    <div className='text-white flex items-center gap-2 text-lg font-semibold cursor-pointer p-2 border-b-2 border-transparent hover:border-white'>
        <Icon/>
        <a href="">{name}</a>
    </div>
  )
}

export default HeaderItem