import React from 'react'
import logo from '../../assets/logo.svg'
import './NavBar.css';

export default function NavBar() {
  return (
    <div className='nav-bar'>
        <div className='branding'>
            <span>SOLIDSTACK</span>
            <img src={logo} style={{height: 97.5, width: 108.75}} alt="logo" />
        </div>
        <div className='redirects'>
            <span>SERVICES</span>
            <span>PROJECTS</span>
            <span>CLIENTS</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
        </div>
    </div>
  )
}