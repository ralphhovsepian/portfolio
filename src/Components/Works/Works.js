import React, { Component } from 'react';
import './Works.css';

//sub components
import Website from '../Website/Website';
import Illustration from '../Illustration/Illustration';

//websites
import Shortly from '../styling/shortly.png';
import dictio from '../styling/dictio.png';
import pizzanini from '../styling/pizzanini.png';
import easybank from '../styling/easybank.png';

//illustrations
import illone from '../styling/45.png';
import illtwo from '../styling/48.png';
import illthree from '../styling/40.png';

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export class Works extends Component {
  render() {
    return (
      <div className='Works' id='works'>
        <h1>My works</h1>
        <div className='types'>
          <a id='websites' onClick={this.props.handleWorks}>
            Websites
          </a>

          <a id='illustrations' onClick={this.props.handleWorks}>
            Illustrations
          </a>
        </div>
        <div className='projects'>
          <Website
            name='dictio'
            img={dictio}
            type='React.js/Firebase/Materialize CSS'
          />
          <Website
            name='shortly-react'
            img={Shortly}
            type='React.js/Custom CSS'
          />
          <Website
            name='pizzanini'
            img={pizzanini}
            type='React.js/Custom CSS'
          />
          <Website name='easybank' img={easybank} type='React.js/Custom CSS' />

          <Illustration img={illone} />
          <Illustration img={illtwo} />
          <Illustration img={illthree} />
        </div>
      </div>
    );
  }
}
