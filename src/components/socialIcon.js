import React, { Component } from 'react';

export default class SocialIcon extends Component {
  render() {
    return (
      <div>
        <a href={this.props.linkTarget} target="blank"><img src="http://via.placeholder.com/100x100" alt={this.props.altContent}></img></a>
      </div>
    );
  }
}
