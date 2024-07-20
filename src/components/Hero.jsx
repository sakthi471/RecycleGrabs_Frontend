import React from 'react'
import HeroImg from '../assets/img/recycle-can-no-bg.png'

const Hero = () => {
  return (
    <div className='w-[80%]   flex  items-center from-emerald-500 to-lime-600 py-20 justify-between'>
        <div className='w-[50%] gap-4 flex flex-col'>
        <p className=' font-bold text-6xl'>Recycle,</p>
        <p className=' font-bold text-6xl'>Buy and Sell</p>
        <p>We can help you recylce your waste products, sell it and also deliver recycled items you buy from us.</p>
        <button className=' text-green-500 font-bold py-2 w-[200px] px-3 bg-white rounded-md' > Get Started</button>
        </div>
        <div>
            <img src={HeroImg} alt='hero' className=' h-[400px] object-cover rounded-md'/>
        </div>
    </div>
  )
}

export default Hero