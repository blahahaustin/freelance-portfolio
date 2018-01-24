import React, { Component } from 'react';
import ProjectLink from './projectLink.js';

import nandpic from '../images/nand-mahasuwan.jpg';
import weatherpic from '../images/single-page-weather.jpg';
import quotepic from '../images/random-quote-machine.jpg';

export default class WorkPage extends Component {
  render() {
    return (
      <div className="content work-page">
        <div className="link-1">
        <ProjectLink
          linkTarget="http://www.nandmahasuwan.com"
          linkText="Nand Mahasuwan"
          imageSource={nandpic} />
        </div>
        <div className="link-2">
        <ProjectLink
          linkTarget="https://blahahaustin.github.io/single-page-weather/"
          linkText="Single Page Weather App"
          imageSource={weatherpic} />
        </div>
        <div className="link-3">
        <ProjectLink
          linkTarget="https://blahahaustin.github.io/fcc-projects/random-quote-machine"
          linkText="Random Quote Machine"
          imageSource={quotepic} />
        </div>
      </div>
    );
  }
}
