import React from 'react'
import img1 from "../assets/img/wepik-2022120-4551-compressed.jpg";
import img2 from "../assets/img/kelly-sikkema-zcAgxLryKe4-unsplash-compressed.jpg";



export const InfoCards = () => {
  return (
    <div className='w-[70%] flex py-20 items-center justify-between'>

        <div className='flex w-[420px] min-h-[400px]  shadow-lg flex-col border-[1px] border-slate-300 rounded-md'>
            <img src={img1} alt='recycle' className=' h-[250px] w-full object-cover rounded-md'/>
            <p className='p-3 text-base  text-slate-700'>We reuse waste material by converting it into something new. An example of what we recycle is bottles, which are then processed into new glass products, plastic bottles converted into insulations for jackets and sleeping bags.</p>
        </div>
        
        <div className='flex w-[420px] min-h-[400px]  shadow-lg flex-col border-[1px] border-slate-300 rounded-md'>
            <img src={img2} alt='recycle' className=' h-[250px] w-full object-cover rounded-md'/>
            <p className='p-3 text-base  text-slate-700'>We buy and sell waste resources competitively, and ensure efficient trade execution.
            All recyclable resources can be traded on our platform, and we verify every individual and company that is registered.</p>
        </div>

    </div>
  )
}
