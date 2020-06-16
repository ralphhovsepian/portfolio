import React, { Component } from 'react';
import './Footer.css';
import instagram from '../styling/instagram.svg';
import linkedin from '../styling/linkedin.svg';
import github from '../styling/github.svg';

export class Footer extends Component {
  render() {
    return (
      <div className='Footer' id='footer'>
        <h1>Get in touch</h1>
        <div className='social'>
          <a href='https://www.instagram.com/ralf_hov/'>
            <img src={instagram} />
          </a>
          <a href='https://www.linkedin.com/in/ralph-hossepian-649ba216a/'>
            <img src={linkedin} />
          </a>
          <a href='https://github.com/ralphhovsepian/'>
            <img src={github} />
          </a>
        </div>
      </div>
    );
  }
}
