import React, { Component } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export class Nav extends Component {
  render() {
    const { handleMenu } = this.props;
    return (
      <React.Fragment>
        <nav className='nav'>
          <ul>
            <li className='title'>
              Ralph Hovsepian
              <br />
              <span>Front end developer & Illustrator</span>
            </li>
            <li>
              <a href='#footer'>Contact</a>
            </li>
          </ul>
        </nav>
        <nav className='mobileNav'>
          <ul>
            <li className='mobileMenu' onClick={handleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </li>
          </ul>
        </nav>

        <div className='menu'>
          <ul>
            <li>
              <a href='#footer'>Contact</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
