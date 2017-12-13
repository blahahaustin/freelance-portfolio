import React, { Component } from 'react';

export default class ProjectLink extends Component {
  render() {
    return (
      <div>
        <a href={this.props.linkTarget} target="blank">{this.props.linkText}</a>
      </div>
    );
  }
}
