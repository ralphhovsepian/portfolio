import React from 'react';
import './App.css';
import { Nav } from '../Nav/Nav';
import { About } from '../About/About';
import { Info } from '../Info/Info';
import { Skills } from '../Skills/Skills';
import { Works } from '../Works/Works';
import { Footer } from '../Footer/Footer';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMenu = (e) => {
    const mobileMenu = document.querySelector('.menu');
    mobileMenu.classList.toggle('opened');
    console.log(mobileMenu.className);
  };

  handleWorks = (e) => {
    const website = document.getElementById('websites');
    const illustrations = document.getElementById('illustrations');

    if (e.target.id == illustrations.id) {
      for (let i = 0; i < document.querySelectorAll('.website').length; i++) {
        document.querySelectorAll('.website')[i].style.display = 'none';
      }
      for (
        let i = 0;
        i < document.querySelectorAll('#illustration').length;
        i++
      ) {
        document.querySelectorAll('#illustration')[i].style.display = 'block';
      }
    }

    if (e.target.id == website.id) {
      for (
        let i = 0;
        i < document.querySelectorAll('#illustration').length;
        i++
      ) {
        document.querySelectorAll('#illustration')[i].style.display = 'none';
      }
      for (let i = 0; i < document.querySelectorAll('.website').length; i++) {
        document.querySelectorAll('.website')[i].style.display = 'block';
      }
    }
  };

  render() {
    return (
      <div className='App'>
        <Nav handleMenu={this.handleMenu} />
        <About />
        <Info />
        <Skills />
        <Works handleWorks={this.handleWorks} />
        <Footer />
      </div>
    );
  }
}
