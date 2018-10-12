import React, { Component } from "react";
import "../Profile/Profile.css";
import contentImg from '../images/clubInfo.png';
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import posed from 'react-pose';

const Container = posed.div({
  open: {
    backgroundPosition: '0% center',
    delayChildren: 500,
    staggerChildren: 0
  },
  closed: { backgroundPosition: '50% center', delay: 0 }
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

class ClubInfo extends Component {
  state = { isOpen: false };
  
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
      <Container id="clubinfo-container" className="background-container" pose={isOpen ? 'open' : 'closed'}>
        <ButtonContainer id="content-container" pose={isOpen ? 'open' : 'closed'}>
          <Link to={{ pathname: '/home', state: { position: '0%'} }}><Button className="button-top">
            <button type="button" className="block">
              Home
            </button>
          </Button></Link>

          <Button className="info-container">
            <img src={contentImg} />
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

export default ClubInfo;