import React, { Component } from 'react';
import NextButton from './nextButton.js';
import PrevButton from './prevButton.js';

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <PrevButton />
        <a href="https://placeholder.com"><img src="http://via.placeholder.com/500x500" alt="Myself."></img></a>
        <p>I graduated from the University of California, Davis in December 2016 with my degree in Computer Science. I work here full time, living with some friends and my favorite ball of fluff, Fiona.</p>
        <NextButton />
      </div>
    );
  }
}
