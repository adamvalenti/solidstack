import React, {useState, useEffect} from 'react'
import { Person } from '../../../types/types';
import './Testemonial.css';

interface TestemonialProps{
  person: Person;
  quote: string;
  delay: number;
}

const Testemonial:React.FC<TestemonialProps> = ({person, quote, delay}) => {
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
    <div className={`testemonial fadein-animation ${show ? 'is-visible' : ''}`}>
      <div className='quote'>
        {quote}
      </div>
      <div className='person'>
        <div className='name'>
          {person.name}
        </div>
        <div className='position'>
          {person.position}
        </div>
      </div>
    </div>
  )
}

export default Testemonial