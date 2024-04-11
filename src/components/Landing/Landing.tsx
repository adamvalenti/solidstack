import React from 'react'
import './Landing.css';

export default function Landing() {
  return (
    <div className='landing'>
        <div className='tagline'>
            <span>ENGINEERED TO FIT:</span>
            <br/> 
            <span className='text-highlight'>CUSTOM</span>
            <span>&nbsp;SOFTWARE SOLUTIONS</span>
        </div>
        <div className='mission'>
            <span>WE ARE INTERESTED IN SOLVING YOUR PROBLEMS.  WE DESIGN, DEVELOP AND DEPLOY ELEGANT SOLUTIONS TO MEET THE EXACT NEEDS OF YOUR BUSINESS</span>
        </div>
        <div className='button'>
            <span>LET’S TALK ABOUT YOUR PROJECT</span>
        </div>
    </div>
  )
}