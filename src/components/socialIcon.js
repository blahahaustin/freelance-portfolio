import React, { Component } from 'react';

export default class SocialIcon extends Component {
  render() {
    return (
      <div className="social-icon">
        <a
          href={this.props.linkTarget}
          target="blank">
          <img src={this.props.imageSource}
               alt={this.props.altContent}>
          </img>
        </a>
      </div>
    );
  }
}
