import React from 'react'
import Section from '../Section/Section';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Clients from '../Clients/Clients';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Main.css';

const Main: React.FC = () => {
  return (
    <div className='main'>
      <Section title='WHAT WE DO' content={Services} />
      <Section title='HOW WE DO IT' content={Projects} />
      <Section title='WHO WE DO IT FOR' content={Clients} />
      <Section title='WHY WE DO IT' content={About} />
      <Section title='WHEN WE CAN DO IT' content={Contact} />
    </div>
  )
}

export default Main;