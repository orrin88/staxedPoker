import React, { Component } from "react";
import "../Profile/Profile.css";
import contentImg from '../images/clubInfo.png';
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import posed from 'react-pose';
import ClubInfoSlider from './ClubInfoSlider';

const Container = posed.div({
  open: {
    backgroundPosition: 'center 50%',
    delayChildren: 500,
    staggerChildren: 0
  },
  closed: { backgroundPosition: 'center 100%', delay: 0 }
});

const ButtonContainer = posed.div({
  open: {
    y: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { y: '-100%', delay: 300 }
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
      <div className = "whole-container">
        <Container id="clubinfo-container" className="background-container" pose={isOpen ? 'open' : 'closed'}>
          <ButtonContainer id="content-container" pose={isOpen ? 'open' : 'closed'}>
            <ClubInfoSlider />
            <Link to={{ pathname: '/home', state: { position: '0%'} }}>
              <i className="fas fa-angle-down down_arrow"></i>
            </Link>
          </ButtonContainer>
        </Container>
      </div>
    );
  }
}

export default ClubInfo;