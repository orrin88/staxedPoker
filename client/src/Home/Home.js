import React, { Component } from "react";
import "../Profile/Profile.css";
import logo from '../images/png-med-white.png';
import openimage from '../images/open.jpg';
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import posed from 'react-pose';
// import posed, { PoseGroup } from "react-pose";
// (4) Sub components for Animations
// import PokerNews from "./PokerNews";
// import Contact from "./Contact";
// import Calendar from "./Calendar";
// import ClubInfo from "./ClubInfo";

// const RouteContainer = posed.div({
//   enter: { opacity: 1, delay: 300, beforeChildren: true },
//   exit: { opacity: 0 }
// });

const Container = posed.div({
  open: {
    backgroundPosition: '50% center',
    delayChildren: 500,
    staggerChildren: 50
  },
  
  closed: { 
    backgroundPosition: function(props) {
      return props.position + ' center';
    }
  }
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

class Home extends Component {
  state = { isOpen: false };
  
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render(props) {
    const { isOpen } = this.state;

    return (
      <div className = "whole-container">
        <Link to="/clubinfo"><Button className="button-top">
          <button type="button" className="block">
            Club Information
          </button>
        </Button></Link>
        <Container id="home-container" className="background-container home" pose={isOpen ? 'open' : 'closed'} position={this.props.location.state === undefined? '100%': this.props.location.state.position}>
          <ButtonContainer id="content-container" pose={isOpen ? 'open' : 'closed'}>
            <Button className="container-center">
              {/* <h3>San Antonio's Coolest Private Club</h3>
              <h1>RIVER CITY</h1>
              <br />
              <h2>CARD ROOM</h2> */}
              <img src = {logo} className = "logo" />
              {/* <h5>Open 7 days a week for good times!</h5>
              <h4>Poker • Arcade & Console Games • Chess</h4> */}
            </Button>

            <div className="rotate-left">
              <Link to="/pokernews"><Button className="button-left">
                <button type="button" className="block">
                  Poker News
                </button>
              </Button></Link>
            </div>

            <div className="rotate-right">
              <Link to="/contact"><Button className="button-right">
                <button type="button" className="block">
                  Contact
                </button>
              </Button></Link>
            </div>

            <Link to="/events"><Button className="button-bottom">
              <button type="button" className="block">
                Events
              </button>
            </Button></Link>
          </ButtonContainer>
          <ButtonContainer className="open-container">
              <img className = "openimage" src={openimage} />
          </ButtonContainer>
        </Container>
      </div>
    );
  }
}

export default Home;
