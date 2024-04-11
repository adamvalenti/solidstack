import React from 'react'
import systemsDesign from '../../assets/systems-design.svg'
import productDevelopment from '../../assets/product-development.svg'
import automation from '../../assets/automation.svg'
import Service from '../Service/Service';
import './Services.css';

export default function Services() {
  return (
    <div className='services'>
        <div className='header'>
            <span className='text-highlight'>WHAT</span>
            <span>&nbsp;WE DO</span>
        </div>
        <div className='content'>
            <Service title='SYSTEMS DESIGN' desc='Architecting resilient frameworks for efficient, scalable digital systems' image={systemsDesign}/>
            <Service title='PRODUCT DEVELOPMENT' desc='Integrating key features across industries to bring ideas to life' image={productDevelopment}/>
            <Service title='AUTOMATION' desc='Streamlining manual processes for improved operational efficiency' image={automation}/>
        </div>
    </div>
  )
}