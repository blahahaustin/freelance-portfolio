import React, { Component } from 'react';
import NextButton from './nextButton.js'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Hey there! My name is</p>
        <h1>Austin Berbereia</h1>
        <p>a freelance web developer</p>
        <p>focused on creating websites that you'll love.</p>
        <NextButton />
      </div>
    );
  }
}
