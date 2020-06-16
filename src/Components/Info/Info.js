import React, { Component } from 'react';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export class Info extends Component {
  render() {
    return (
      <div className='Info'>
        <h1>Get to know me</h1>
        <div className='paragraph'>
          <p>
            I started my adventure as a programmer long ago. I had interest in
            learning back-end developing when I started high school and explored
            different programming languages since then. I am currently focusing
            on my front-end skills such as React.js and will then move on to the
            server side. Not to forget that I also draw and animate
            illustrations digitally!
          </p>
          <h1 className='arrow'>
            <FontAwesomeIcon icon={faArrowDown} />
          </h1>
        </div>
      </div>
    );
  }
}
