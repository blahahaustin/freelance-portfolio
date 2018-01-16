import React, { Component } from 'react';

export default class ProjectLink extends Component {
  render() {
    return (
      <div className="project">
        <a href={this.props.linkTarget} target="blank" className="project-link">
          <img
            className="project-image"
            src={this.props.imageSource}
            alt={this.props.linkText}>
          </img>
          <div className="project-description-cover">
            <p className="project-description">{this.props.linkText}</p>
          </div>
        </a>
      </div>
    );
  }
}
