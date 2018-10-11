import React, { Component } from "react";
import "../Profile/Profile.css";

import ReactDom from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import posed from 'react-pose';

const ButtonContainer = posed.div({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 }
});

const Button = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

class ClubInfo extends Component {
  state = { isOpen: false };
  
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
      <div id="container">
        <ButtonContainer id="content-container" pose={isOpen ? 'open' : 'closed'}>
          <Link to="/home"><Button className="button-top">
            <button type="button" className="block">
              Home - 
            </button>
          </Button></Link>

          <Button className="info-container">
            <h3 className="title">About Us</h3>
            <h3>San Antonio's Coolest Private Club</h3>
            <h1>RIVER CITY</h1>
            <br />
            <h2>CARD ROOM</h2>
            <h5>Open 7 days a week for good times!</h5>
            <h4>Poker • Arcade & Console Games • Chess</h4>
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}

export default ClubInfo;