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

class Contact extends Component {
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

          <Button className="contact-container">
            <h3 className="title">Contact Us</h3>
            <form className = "contactform">
              <input type="text" placeholder="Email Address" />
              <textarea placeholder="Please leave a Message" />
              <input type="submit" value="Send Message" />
              <div className="clear" />
            </form>
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}

export default Contact;