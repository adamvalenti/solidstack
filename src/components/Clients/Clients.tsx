import React from 'react'
import ClientLogo from './ClientLogo/ClientLogo'
import Testemonial from './Testemonial/Testemonial';
import logo from '../../assets/logo.svg'
import { ContentComponentProps } from '../../types/interfaces'
import { Person } from '../../types/types';
import './Clients.css';

const Clients: React.FC<ContentComponentProps> = ({ isVisible }) => {
  const people = [
    {name: "ADAM VALENTI", position: "COO @ SOLIDSTACK"},
    {name: "KYLE ROACH", position: "CEO @ SOLIDSTACK"},
    {name: "SEMYON KHLAVICH", position: "CTO @ SOLIDSTACK"}
  ]
  const quotes = [
    "EVERYONE HERE GETS IT",
    "WE MOST DEFINITLY GET IT",
    "LET'S NOT DOWNPLAY HOW MUCH WE GET IT"
  ]

  return (
    <div className='clients'>
      <div className='testemonials'>
        <Testemonial person={people[0]} quote={quotes[0]} delay={isVisible ? 0.05 : 0}/>
        <Testemonial person={people[1]} quote={quotes[1]} delay={isVisible ? 0.1 : 0}/>
        <Testemonial person={people[2]} quote={quotes[2]} delay={isVisible ? 0.15 : 0}/>
      </div>
      <div className='logos'>
        <ClientLogo logo={logo} delay={isVisible ? 0.2 : 0}/>
        <ClientLogo logo={logo} delay={isVisible ? 0.25 : 0}/>
        <ClientLogo logo={logo} delay={isVisible ? 0.3 : 0}/>
        <ClientLogo logo={logo} delay={isVisible ? 0.35 : 0}/>
        <ClientLogo logo={logo} delay={isVisible ? 0.4 : 0}/>
      </div>
    </div>
  )
}

export default Clients