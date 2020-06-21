import React, { Component } from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faCog } from '@fortawesome/free-solid-svg-icons';

export class Skills extends Component {
  render() {
    return (
      <div className='Skills' id='skills'>
        <div className='skill'>
          <h1>
            <FontAwesomeIcon icon={faCode} />
          </h1>
          <div className='tags'>
            <p>HTML5</p>
            <p>CSS3/SASS</p>
            <p>JS/ES6</p>
            <p>React.js</p>
          </div>
        </div>
        <div className='skill'>
          <h1>
            <FontAwesomeIcon icon={faPaintBrush} />
          </h1>
          <div className='tags'>
            <p>Affinity Designer</p>
            <p>Adobe Illustrator</p>
            <p>Adobe Photoshop</p>
            <p>After Effects</p>
          </div>
        </div>
        <div className='skill'>
          <h1>
            <FontAwesomeIcon icon={faCog} />
          </h1>
          <div className='tags'>
            <p>VS code</p>
            <p>NPM</p>
            <p>Parcel/Webpack</p>
            <p>Git/Github</p>
          </div>
        </div>
        <div className='line'></div>
      </div>
    );
  }
}
