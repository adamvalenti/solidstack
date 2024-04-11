import React from 'react'
import './Service.css';

interface ServiceProps {
    title: string;
    desc: string;
    image: string;
}

export default function Service({title, desc, image}: ServiceProps) {
  return (
    <div className='service'>
        <div className='image'>
            <img src={image} alt="logo" />
        </div>
        <div className='content'>
            <div className='title'>
                {title}
            </div>
            <div className='description'>
                {desc}
            </div>
        </div>
    </div>
  )
}