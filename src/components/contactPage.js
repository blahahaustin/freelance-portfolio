import React, { Component } from 'react';
import SocialIcon from './socialIcon.js';

import mailIcon from '../images/social-icons/mail.png';
import facebookIcon from '../images/social-icons/facebook.svg';
import linkedinIcon from '../images/social-icons/linkedin.svg';
import twitterIcon from '../images/social-icons/twitter.svg';
import instagramIcon from '../images/social-icons/instagram.svg';
import githubIcon from '../images/social-icons/github.svg';

export default class ContactPage extends Component {
  render() {
    return (
      <div className="content contact-page">
        <h1 className="contact-heading">Hit me up!</h1>
        <p className="contact-blurb">You can contact me on social media, linked below.</p>
        <SocialIcon
          linkTarget="mailto:austin.berbereia@gmail.com"
          imageSource={mailIcon}
          altContent="Email"/>
        <SocialIcon
          linkTarget="https://www.facebook.com/austin.berbereia"
          imageSource={facebookIcon}
          altContent="Facebook"/>
        <SocialIcon
          linkTarget="https://www.linkedin.com/in/austinberbereia/"
          imageSource={linkedinIcon}
          altContent="LinkedIn"/>
        <SocialIcon
          linkTarget="https://twitter.com/blahahaustin"
          imageSource={twitterIcon}
          altContent="Twitter"/>
        <SocialIcon
          linkTarget="https://www.instagram.com/blahahaustin/"
          imageSource={instagramIcon}
          altContent="Instagram"/>
        <SocialIcon
          linkTarget="https://github.com/blahahaustin"
          imageSource={githubIcon}
          altContent="Github"/>
      </div>
    );
  }
}
