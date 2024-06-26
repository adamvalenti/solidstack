import React from 'react'
import systemsDesign from '../../assets/systems-design.svg'
import productDevelopment from '../../assets/product-development.svg'
import automation from '../../assets/automation.svg'
import { ContentComponentProps } from '../../types/interfaces'
import Service from './Service/Service';
import './Services.css';

const Services: React.FC<ContentComponentProps> = ({ isVisible }) => {
  return (
    <>
      <Service 
        title='SYSTEMS DESIGN'
        desc='Architecting resilient frameworks for efficient, scalable digital systems'
        image={systemsDesign}
        delay={isVisible ? 0.1 : 0}
      />
      <Service
        title='PRODUCT DEVELOPMENT'
        desc='Integrating key features across industries to bring ideas to life'
        image={productDevelopment}
        delay={isVisible ? 0.2 : 0}
      />
      <Service
        title='AUTOMATION'
        desc='Streamlining manual processes for improved operational efficiency'
        image={automation}
        delay={isVisible ? 0.3 : 0}
      />
    </>
  )
}

export default Services;