import React, { Component } from "react";
import "../Profile/Profile.css";

import ReactDom from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import posed from 'react-pose';
import twitter_img from "../images/twitter.png";
import facebook_img from "../images/facebook.png";

const Container = posed.div({
  open: {
    backgroundPosition: '50% center',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { backgroundPosition: '0% center', delay: 300 }
});

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

class Contact extends Component {
  state = { isOpen: false };
  
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
      <div className = "whole-container">
        <Container id="contact-container" className="background-container" pose={isOpen ? 'open' : 'closed'}>
          <ButtonContainer id="content-container" pose={isOpen ? 'open' : 'closed'}>
            <Button className="contact-container">
              <h3 className="title">Contact Us</h3>
              <h2>For rates & games</h2>
              <h4>Call: (210) 233-9355</h4>
              <h4>Text: (210) 880-3305</h4>
              <h5>6565 babcock rd #24<br />San antonio, Tx, 78248</h5>
              <img src={facebook_img} className="social_img" />
              <img src={twitter_img} className="social_img" />
              <Link to={{ pathname: '/home', state: { position: '0%'} }}>
                <i className="fas fa-angle-left left_arrow"></i>
              </Link>
            </Button>
          </ButtonContainer>
        </Container>
      </div>
    );
  }
}

export default Contact;