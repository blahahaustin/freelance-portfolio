import React, { Component } from 'react';

import selfie from '../images/profile-photo.png';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="content about-page">
        <img className="profile-photo" src={selfie} alt="Myself"></img>
        <p className="profile-blurb">I graduated from the University of California, Davis in December 2016 with my degree in Computer Science. I work here full time, living with some friends and my favorite ball of fluff, Fiona.</p>
      </div>
    );
  }
}
