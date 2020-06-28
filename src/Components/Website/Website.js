import React, { Component } from 'react';

export class Website extends Component {
  render() {
    let link = `https://ralphhovsepian.github.io/${this.props.name}`;
    return (
      <div className='website'>
        <h3>{this.props.type}</h3>
        <a href={link}>
          <img src={this.props.img} alt='Preview' />
        </a>
      </div>
    );
  }
}

export default Website;
