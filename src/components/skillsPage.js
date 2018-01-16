import React, { Component } from 'react';
import bootstrapIcon from '../images/skill-icons/bootstrap.png'
import cssIcon from '../images/skill-icons/css.svg'
import htmlIcon from '../images/skill-icons/html.svg'
import javascriptIcon from '../images/skill-icons/javascript.svg'
import jqueryIcon from '../images/skill-icons/jquery.svg'
import reactIcon from '../images/skill-icons/react.svg'
import gridIcon from '../images/skill-icons/css-grid.svg'

export default class SkillsPage extends Component {
  render() {
    return (
      <div className="content skills-page">
        <div className="skillIcon">
          <img src={bootstrapIcon}></img>
          <p>Bootstrap</p>
        </div>
        <div className="skillIcon">
          <img src={cssIcon}></img>
          <p>CSS3</p>
        </div>
        <div className="skillIcon">
          <img src={htmlIcon}></img>
          <p>HTML5</p>
        </div>
        <div className="skillIcon">
          <img src={javascriptIcon}></img>
          <p>JavaScript</p>
        </div>
        <div className="skillIcon">
          <img src={jqueryIcon}></img>
          <p>jQuery</p>
        </div>
        <div className="skillIcon">
          <img src={reactIcon}></img>
          <p>React</p>
        </div>
        <div className="skillIcon">
          <img src={gridIcon}></img>
          <p>CSS Grid</p>
        </div>
      </div>
    );
  }
}
