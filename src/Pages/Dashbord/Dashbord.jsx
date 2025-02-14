import React from 'react'
import Offers from './Offers/Offers'
import Bookflight from './Bookflight/Bookflight.JSX'

const Dashbord = () => {
  return (
    <div className='grid grid-rows-10 '>
    <div className='md:row-span-6'>
    <div className='grid grid-cols-10 '>
    <div className='md:col-span-8'> <Bookflight />
    </div>
    <div className='md:col-span-2'> 
    </div>
        </div>
    </div>
    <div className='md:row-span-4'>
    <Offers />
    </div>
   
    </div>
  )
}

export default Dashbord
