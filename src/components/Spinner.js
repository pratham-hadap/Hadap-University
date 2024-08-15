import React from 'react'
import './Spinner.css'

export const Spinner = () => {
  return (
    <div  className="flex flex-col items-center space-y-2">
        <div className='spinner bg-bgDark2'>spinner</div>
        <div className='"text-bgDark text-lg font-semibold"'>Loading..........</div>
    </div>
    
  )
}
