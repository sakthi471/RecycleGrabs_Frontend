import React from 'react'

import img1 from "../assets/img/salepic5.jpg";
import img2 from "../assets/img/salepic4.jpg";
import img3 from "../assets/img/salepic6.jpg";
import img4 from "../assets/img/salepic7.jpg";
import img5 from "../assets/img/salepic10.jpg";
import img6 from "../assets/img/salepic9.jpg";
import img7 from "../assets/img/salepic11.jpg";
import img8 from "../assets/img/salepic12.jpg";
import img9 from "../assets/img/salepic8.jpg";
import img10 from "../assets/img/nareeta-martin-FoG7PKNYjpM-unsplash.jpg";
import img11 from "../assets/img/bozhin-karaivanov-w-a4k1U8oWo-unsplash.jpg";
import img12 from "../assets/img/haley-lawrence-HTttz00wkzU-unsplash-compressed (2).jpg";



import ItemCard from '../components/ItemCard';



const items = [ 
    { id:1 , title: "Plastics for  sale", price: 100, img: img1, timeAgo:24},
    { id:2 , title: "Used batteries for recycling", price: 200, img: img2, timeAgo:24},
    { id:3 , title: "Electronic devices scraps", price: 300, img: img3, timeAgo:24},
    { id:4 , title: "Blue heap of tires", price: 400, img: img4, timeAgo:24},
    { id:5 , title: "Paper Scraps", price: 500, img: img5, timeAgo:24},
    { id:6 , title: "White Paper scraps", price: 600, img: img6, timeAgo:24},
    { id:7 , title: "Pet Bottles Scrap", price: 700, img: img7, timeAgo:24},
    { id:8 , title: "Pet Bottles Scrap", price: 800, img: img8, timeAgo:24},
    { id:9 , title: "Carboards", price: 900, img: img9, timeAgo:24},
    { id:10 , title: "Three brightly colourful waste bins", price: 1000, img: img10,timeAgo:35},
    { id:11 , title: "Recyclable Prescription Bottles", price: 1100, img: img11,timeAgo:35},
    { id:12 , title: "Colorful electrical wire connectors", price: 1200, img: img12,timeAgo:35},
    ]






const Buy = () => {
  return (
    <div className=' flex flex-col items-center py-16 '>
        <p className='font-semibold text-2xl' >Shop with RecycleGrabs </p>
        <div className=' w-[80%] flex  flex-wrap gap-10 justify-center py-10'>
            {
                    items.map((item, index) => (
                        <ItemCard key={index} post={item} />
                    ))
                
            }

        </div>

    </div>
  )
}

export default Buy