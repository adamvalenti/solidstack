import React, {useState, useEffect, useRef} from 'react'
import { ContentComponentProps } from '../../types/interfaces';
import './Section.css';

interface SectionProps {
  title: string;
  content: React.ComponentType<ContentComponentProps>;
}

const Section: React.FC<SectionProps> = ({ title, content: ContentComponent }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  var i = title.indexOf(' ');
  var word = title.substring(0, i);
  var rest = title.substring(i);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '6000px 0px -250px 0px',
      threshold: 0.01
    };
    
    const observer = new IntersectionObserver(callback, options);

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className='section'>
      <div className={`header fadein-animation ${isVisible ? 'is-visible' : ''}`}>
        <span className='text-highlight'>{word}</span>
        &nbsp;
        <span>{rest}</span>
      </div>
      <div className='content'>
        <ContentComponent isVisible={isVisible}/>
      </div>
    </div>
  )
}

export default Section;