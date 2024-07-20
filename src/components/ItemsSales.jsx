import React from 'react'
import img1 from "../assets/img/haley-lawrence-HTttz00wkzU-unsplash-compressed.jpg";
import img2 from '../assets/img/michael-jin-ET6_fDwZj2U-unsplash-compressed.jpg';
import img3 from "../assets/img/nick-fewings--2lJGRIY5P0-unsplash-compressed.jpg";


const posts=[
  { title:"Recyclable Prescription Bottles",
    price:200,
    img:img1,
    timeAgo:23,
  },
  { title:"Cardboard Box and Karton",
    price:200,
    img:img2,
    timeAgo:23,
  },{ title:"100g of Plastic Bottles",
    price:200,
    img:img3,
    timeAgo:23,
  },
]

import ItemCard from './ItemCard';

const ItemsSales = () => {
  return (
    <div className=' flex  gap-8 flex-col  w-[68%] py-20  '>   
      <p className=' font-bold text-2xl text-left text-gray-700 '>Items on sale </p>
           <div className=' flex gap-10 justify-center'>
           {
              posts.map( (post ,index)=>( <ItemCard key={index} post={post} />   ) )
            }
           </div>
    </div>
  )
}

export default ItemsSales