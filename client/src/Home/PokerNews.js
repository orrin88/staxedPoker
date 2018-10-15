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

class PokerNews extends Component {
  state = { isOpen: false };
  
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
      <Container id="pokernews-container" className="background-container" pose={isOpen ? 'open' : 'closed'}>
        <ButtonContainer id="content-container" pose={isOpen ? 'open' : 'closed'}>
          <Button className="pokernews-content">
            <h3 className="title">Poker News</h3>
            <iframe src="https://www.pokernews.com/twitter/" width="300" height="500" frameborder="0" marginheight="0" marginwidth="0" ></iframe>
          </Button>
        </ButtonContainer>
        <Link to={{ pathname: '/home', state: { position: '0%'} }}>
          <i className="fas fa-angle-right right_arrow"></i>
        </Link>
      </Container>
    );
  }
}

export default PokerNews;