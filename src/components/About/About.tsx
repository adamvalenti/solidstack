import React, {useState, useEffect} from 'react'
import { ContentComponentProps } from '../../types/interfaces'
import './About.css';

const About: React.FC<ContentComponentProps> = ({ isVisible }) => {
  const [showMotivation, setShowMotivation] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const motivationTimer = setTimeout(() => {
      setShowMotivation(true);
    }, 100);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 200);

    return () => {
      clearTimeout(motivationTimer)
      clearTimeout(buttonTimer)
    };
    
  }, [isVisible]);

  return (
    <div className='about'>
       <div className={`motivation fadein-animation ${showMotivation ? 'is-visible' : ''}`}>
          <span>WE ARE PASSIONATE ABOUT SOLVING PROBLEMS WITH THE</span>
          &nbsp;
          <span className='text-highlight'>FREEDOM</span>
          &nbsp;
          <span>TO DELIVER HOW WE KNOW BEST</span>
        </div>
        <button className={`button fadein-animation ${showButton ? 'is-visible' : ''}`}>
          READY TO MAKE SOMETHING GREAT?
        </button> 
    </div>
  )
}

export default About;