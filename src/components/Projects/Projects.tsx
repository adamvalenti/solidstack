import React from 'react'
import systemsDesign from '../../assets/systems-design.svg'
import productDevelopment from '../../assets/product-development.svg'
import { ContentComponentProps } from '../../types/interfaces'
import Project from './Project/Project';
import './Projects.css';

const Projects: React.FC<ContentComponentProps> = ({ isVisible }) => {
  return (
    <div className='projects'>
      <Project
        title='PROJECT 1'
        desc='Architecting resilient frameworks for efficient, scalable digital systems'
        image={systemsDesign}
        delay={isVisible ? 0.1 : 0}
      />
      <Project
        title='PROJECT 2'
        desc='Integrating key features across industries to bring ideas to life'
        image={productDevelopment}
        delay={isVisible ? 0.2 : 0}
      />
    </div>
  )
}

export default Projects;