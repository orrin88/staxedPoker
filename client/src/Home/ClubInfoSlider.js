import React, { Component } from "react";
import Slider from "react-slick";
import OpenImg from '../images/open247.png';
import Logo from '../images/png-med-white.png';

export default class ClubInfoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className = "slickslider">
        <h2>CLUB INFO</h2>
        <Slider {...settings}>
          <div className="slide">
            <img src={OpenImg} className='openimg'/>
            <img src={Logo} className='logo' />
            <h3>Texas' first 24/7</h3>
            <h4>Private Member club</h4>
            <h4>18+ welcome w/ valid id</h4>
          </div>
          <div className="slide">
            <div class = 'titlepart'>
              <h3 className = "pink">River city card room</h3>
              <h4 className = "skyblue">San antonio's coolest</h4>
              <h4 className = "skyblue">private club</h4>
            </div>
            <p>100% Legal Poker</p>
            <p>Cash Games</p>
            <p>On Demand Sit & Go</p>
            <p>Tournaments</p>
            <p>Member vs Member Cash Tournaments</p>
            <p>On Chess, Arcade Classics, &</p>
            <p>XBoxOne Games</p>
            <p>NFL Sunday Ticket</p>
          </div>
        </Slider>
      </div>
    );
  }
}