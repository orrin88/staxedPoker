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

class Events extends Component {
  state = { isOpen: false };
  
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
      <div className = "whole-container events">
        <Link to={{ pathname: '/home', state: { position: '100%'} }}><Button className="button-top">
          <i className="fas fa-angle-up up_arrow"></i>
        </Button></Link>
        <Container id="events-container" className="background-container" pose={isOpen ? 'open' : 'closed'}>
          <ButtonContainer id="content-container" pose={isOpen ? 'open' : 'closed'}>
            <Button className="events-container">
              <h3 className="title">Events</h3>
              <div className="events_list">
                <ul>
                  <li>
                    <div className="imagepart">
                      <div className="image">
                      </div>
                      <div className="button">Free</div>
                    </div>
                    <div className="contentpart">
                      <h1 className="eventtitle">Wednesday Poker Tournament</h1>
                      <p className="moredetails">
                        Wed, Oct 17, 7:00pm + 11 more events<br />
                        Ace Car...<br />
                        Free
                      </p>
                      <i className="fas fa-upload upload_icon"></i>
                      <i className="far fa-heart heart_icon"></i>
                    </div>
                  </li>
                  <li>
                    <div className="imagepart">
                      <div className="image">
                      </div>
                      <div className="button">Free</div>
                    </div>
                    <div className="contentpart">
                      <h1 className="eventtitle">Wednesday Poker Tournament</h1>
                      <p className="moredetails">
                        Wed, Oct 17, 7:00pm + 11 more events<br />
                        Ace Car...<br />
                        Free
                      </p>
                      <i className="fas fa-upload upload_icon"></i>
                      <i className="far fa-heart heart_icon"></i>
                    </div>
                  </li>
                  <li>
                    <div className="imagepart">
                      <div className="image">
                      </div>
                      <div className="button">Free</div>
                    </div>
                    <div className="contentpart">
                      <h1 className="eventtitle">Wednesday Poker Tournament</h1>
                      <p className="moredetails">
                        Wed, Oct 17, 7:00pm + 11 more events<br />
                        Ace Car...<br />
                        Free
                      </p>
                      <i className="fas fa-upload upload_icon"></i>
                      <i className="far fa-heart heart_icon"></i>
                    </div>
                  </li>
                  <li>
                    <div className="imagepart">
                      <div className="image">
                      </div>
                      <div className="button">Free</div>
                    </div>
                    <div className="contentpart">
                      <h1 className="eventtitle">Wednesday Poker Tournament</h1>
                      <p className="moredetails">
                        Wed, Oct 17, 7:00pm + 11 more events<br />
                        Ace Car...<br />
                        Free
                      </p>
                      <i className="fas fa-upload upload_icon"></i>
                      <i className="far fa-heart heart_icon"></i>
                    </div>
                  </li>
                  <li>
                    <div className="imagepart">
                      <div className="image">
                      </div>
                      <div className="button">Free</div>
                    </div>
                    <div className="contentpart">
                      <h1 className="eventtitle">Wednesday Poker Tournament</h1>
                      <p className="moredetails">
                        Wed, Oct 17, 7:00pm + 11 more events<br />
                        Ace Car...<br />
                        Free
                      </p>
                      <i className="fas fa-upload upload_icon"></i>
                      <i className="far fa-heart heart_icon"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </Button>
          </ButtonContainer>
        </Container>
      </div>
    );
  }
}

export default Events;