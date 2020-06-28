import React, { Component } from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faCog } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faNpm,
  faGithubAlt,
  faAdobe,
  faGit,
} from '@fortawesome/free-brands-svg-icons';
export class Skills extends Component {
  render() {
    return (
      <div className='Skills' id='skills'>
        <h1>Technologies I use</h1>
        <div>
          <span>
            <FontAwesomeIcon icon={faHtml5} size='3x' />
          </span>
          <span>
            <FontAwesomeIcon icon={faCss3Alt} size='3x' />
          </span>
          <span>
            <FontAwesomeIcon icon={faSass} size='3x' />
          </span>
          <span>
            <FontAwesomeIcon icon={faJsSquare} size='3x' />
          </span>
          <span>
            <FontAwesomeIcon icon={faReact} size='3x' />
          </span>
          <span>
            <FontAwesomeIcon icon={faNpm} size='3x' />
          </span>
          <span>
            <FontAwesomeIcon icon={faGithubAlt} size='3x' />
          </span>
          <span>
            <FontAwesomeIcon icon={faAdobe} size='3x' />
          </span>
          <span>
            <FontAwesomeIcon icon={faGit} size='3x' />
          </span>
        </div>
      </div>
    );
  }
}
