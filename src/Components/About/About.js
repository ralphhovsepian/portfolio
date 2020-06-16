import React, { Component } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ralph from '../styling/ralph.jpg';
export class About extends Component {
  render() {
    return (
      <div className='About'>
        <div className='left'>
          <h1>Hi! I'm Ralph.</h1>
          <h3>Self-taught web developer and illustrator</h3>
          <br />
          <h3>from Yerevan,Armenia.</h3>
          <br />
          <h3>
            Currently building up my skills and my goal is to
            <br /> learn the MERN stack in the near future .
          </h3>
        </div>
        <div className='right'>
          <img src={ralph} alt='Ralph' />
        </div>
      </div>
    );
  }
}
