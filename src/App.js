import React, { Component } from 'react';
import Menu from './components/menu.js';
import HomePage from './components/homePage.js';
import WorkPage from './components/workPage.js';
import SkillsPage from './components/skillsPage.js';
import AboutPage from './components/aboutPage.js';
import ContactPage from './components/contactPage.js';
import PrevButton from './components/prevButton.js';
import NextButton from './components/nextButton.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 0
    }
    this.handleClick = this.handleClick.bind(this);
  };

  // Handle the click event. Update the active item.
  handleClick(index, event) {
    event.preventDefault();
    console.log(index);
    this.setState({
      activeItem: index
    });
  }

  renderPage() {
    switch (this.state.activeItem) {
      case 0:
        return(<HomePage />);
      case 1:
        return(<WorkPage />);
      case 2:
        return(<SkillsPage />);
      case 3:
        return(<AboutPage />);
      case 4:
        return(<ContactPage />);
      default:
        return(<p>Something went wrong!</p>);
    }
  }

  render() {
    return (
      <div className="container">
        <Menu
          activeItem={this.state.activeItem}
          onClick={this.handleClick}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
