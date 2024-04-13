import React, {useState, useEffect} from 'react'
import './ClientLogo.css';

interface ClientLogoProps {
  logo: string;
  delay: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({logo, delay}) => {
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
    <div className={`client-logo fadein-animation ${show ? 'is-visible' : ''}`}>
      <img src={logo} style={{width: 200}} alt="logo" />
    </div>
  )
}

export default ClientLogo