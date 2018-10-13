import React, { Component } from "react";
import "../Profile/Profile.css";
import calendarImg from '../images/calendar.png';

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

class Calendar extends Component {

  state = { isOpen: false };
  
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
      <div id="container">
        <ButtonContainer id="content-container" className="background-container" pose={isOpen ? 'open' : 'closed'}>
          <Link to="/home"><Button className="button-top">
            <button type="button" className="block">
              Home
            </button>
          </Button></Link>

          <Button className="calendar-container">
            <h3 className="title">Club Calendar</h3>
            <img src={calendarImg} className="prototype" />
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}

export default Calendar;