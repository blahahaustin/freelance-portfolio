import React, { Component } from 'react';
import ProjectLink from './projectLink.js';

export default class WorkPage extends Component {
  render() {
    return (
      <div>
        <ProjectLink linkTarget="http://www.nandmahasuwan.com" linkText="Nand Mahasuwan"/>
        <ProjectLink linkTarget="https://blahahaustin.github.io/single-page-weather/" linkText="Single Page Weather App"/>
        <ProjectLink linkTarget="https://blahahaustin.github.io/fcc-projects/random-quote-machine" linkText="Random Quote Machine"/>
      </div>
    );
  }
}
