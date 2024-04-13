import React, {useState, useEffect} from 'react'
import './Service.css';

interface ServiceProps {
  title: string;
  desc: string;
  image: string;
  delay: number;
}

const Service: React.FC<ServiceProps> = ({title, desc, image, delay}) => {
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
    <div className={`service fadein-animation ${show ? 'is-visible' : ''}`}>
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

export default Service