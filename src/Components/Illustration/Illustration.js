import React, { Component } from 'react';

export class Illustration extends Component {
  render() {
    return (
      <div id='illustration'>
        <a href='#'>
          <img src={this.props.img} alt='Illustration' />
        </a>
      </div>
    );
  }
}

export default Illustration;
