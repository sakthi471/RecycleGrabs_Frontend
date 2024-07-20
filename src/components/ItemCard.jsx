import React from 'react'
import {Link } from 'react-router-dom'
import { Heart } from 'lucide-react';


const ItemCard = ({post}) => {
  return (
    <Link to={`/buy/${post.id}`}>
    <div className='  w-[280px]  flex flex-col bg-slate-100  shadow-2xl cursor-pointer' >
      <img src={post.img} alt='recycle' className=' h-[210px] w-full object-cover ' />
      <div className= '  text-slate-800 px-4  py-3 flex flex-col justify-between gap-3'>
            <div className='flex justify-between'>
            <p>{post.title}</p>
            <Heart color='grey' size={18} />
            </div>
          <div className='flex justify-between'>
              <p>Rs {post.price}</p>
              <p> {post.timeAgo} min ago</p>
          </div>
      </div>
    </div>
    </Link>
  )
}

export default ItemCard