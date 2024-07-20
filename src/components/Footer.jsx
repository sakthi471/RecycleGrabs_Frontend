import React from 'react'

import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';


const Footer = () => {
  return (
    <div className='w-full text-white flex flex-col p-10 bg-slate-800 min-h-[200px] items-center gap-10'>
      <div className=' flex items-center gap-5 capitalize'>
        <p  className=' cursor-pointer hover:border-b-2  p-1 '>about us</p>
        <p  className=' cursor-pointer hover:border-b-2  p-1 '>contact us</p>
        <p  className=' cursor-pointer hover:border-b-2  p-1 '>terms and conditions</p>
        <p  className=' cursor-pointer hover:border-b-2  p-1 '>buy &sell</p>
        <p  className=' cursor-pointer hover:border-b-2  p-1 '>blog</p>
      </div>
      <div className=' flex items-center gap-5 '>
          <Twitter size={24} />
          <Facebook size={24} />
          <Instagram size={24} />
          <Linkedin size={24} />
          <Github size={24} />

      </div>
    </div>

  )
}

export default Footer