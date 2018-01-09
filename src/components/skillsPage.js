import React, { Component } from 'react';
import NextButton from './nextButton.js';
import PrevButton from './prevButton.js';

export default class SkillsPage extends Component {
  render() {
    return (
      <div>
        <PrevButton />
        <a href="https://placeholder.com"><img src="http://via.placeholder.com/500x500" alt="Skills are jQuery, HTML5, CSS3, React, Bootstrap, and Javascript."></img></a>
        <NextButton />
      </div>
    );
  }
}
