import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
// import { ArrowRightCircle } from 'react-bootstrap-icons';

// import Typed from 'typed.js';

export default function Home() {
  return (
    <div className='home-wrapper'>
      <div className='main-info'>
        <h1>I am Sameer</h1>
        <h2 className='typewriter'>
          <span style={{fontWeight: 'bold', color:'red'}}>
            <Typewriter  
            words= {['Developer', 'Designer', 'Photographer']}
            loop={true}
            typeSpeed= {100}
            deleteSpeed= {50}
            cursor = {true}
            />
          </span>
        </h2>
        <Link to='/contact' className='btn-main-offer' >
          Contact me {'  '}
        </Link>
      </div>
    </div>
  )
}
