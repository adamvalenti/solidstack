import React, {useState, useEffect} from 'react'
import './Project.css';

interface ProjectProps {
  title: string;
  desc: string;
  image: string;
  delay: number;
}

const Project: React.FC<ProjectProps> = ({title, desc, image, delay}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (delay===0) {
      return;
    }
    const timer = setTimeout(() => {
      setShow(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
    
  }, [delay]);

  return (
    <div className={`project fadein-animation ${show ? 'is-visible' : ''}`}>
      <div className='title'>
        {title}
      </div>
      <div className='content'>
      <div className='image'>
        Image
      </div>
        <div className='description'>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default Project