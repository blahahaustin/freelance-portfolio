import React, { Component } from 'react';
import SocialIcon from './socialIcon.js';

export default class ContactPage extends Component {
  render() {
    return (
      <div className="content">
        <h1>Taking new clients!</h1>
        <p>You can contact me on social media, linked below.</p>
        <SocialIcon linkTarget="mailto:austin.berbereia@gmail.com" altContent="Email"/>
        <SocialIcon linkTarget="https://www.facebook.com/austin.berbereia" altContent="Facebook"/>
        <SocialIcon linkTarget="https://www.linkedin.com/in/austinberbereia/" altContent="LinkedIn"/>
        <SocialIcon linkTarget="https://twitter.com/blahahaustin" altContent="Twitter"/>
        <SocialIcon linkTarget="https://www.instagram.com/blahahaustin/" altContent="Instagram"/>
        <SocialIcon linkTarget="https://github.com/blahahaustin" altContent="Github"/>
      </div>
    );
  }
}
