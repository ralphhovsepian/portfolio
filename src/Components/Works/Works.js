import React, { Component } from 'react';
import './Works.css';
import Shortly from '../styling/shortly.png';
import whereintheworld from '../styling/whereintheworld.png';
import pizzanini from '../styling/pizzanini.png';
import illone from '../styling/45.png';
import illtwo from '../styling/48.png';
import illthree from '../styling/40.png';
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
          <div className='website'>
            <a href='https://ralphhovsepian.github.io/shortly-react/'>
              <img src={Shortly} alt='shortly' />
            </a>
          </div>
          <div className='website'>
            <a href='https://ralphhovsepian.github.io/whereintheworld/'>
              <img src={whereintheworld} alt='where in the world' />
            </a>
          </div>

          <div className='website'>
            <a href='https://ralphhovsepian.github.io/pizzanini/'>
              <img src={pizzanini} alt='pizza nini' />
            </a>
          </div>

          <div id='illustration'>
            <a href='#'>
              <img src={illone} alt='Yoga' />
            </a>
          </div>

          <div id='illustration'>
            <a href='#'>
              <img src={illtwo} alt='Fiji' />
            </a>
          </div>
          <div id='illustration'>
            <a href='#'>
              <img src={illthree} alt='Road Trip' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
