import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export class Footer extends Component {
  render() {
    return (
      <div className='Footer' id='footer'>
        <div className='info'>
          <div className='social'>
            <a href='https://www.instagram.com/ralf_hov/'>
              <FontAwesomeIcon icon={faInstagram} size='4x' />
            </a>
            <a href='https://www.linkedin.com/in/ralph-hossepian-649ba216a/'>
              <FontAwesomeIcon icon={faLinkedin} size='4x' />
            </a>
            <a href='https://github.com/ralphhovsepian/'>
              <FontAwesomeIcon icon={faGithub} size='4x' />
            </a>
          </div>
          <p>
            <FontAwesomeIcon icon={faEnvelope} size='1x' />
            ralphhossepian@gmail.com
          </p>
        </div>
      </div>
    );
  }
}
