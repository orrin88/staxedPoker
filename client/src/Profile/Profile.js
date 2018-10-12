import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import "./Profile.css";
// import axios from "axios";
// import { API_URL } from "../constants";
// import logo from "../images/user-solid.png";
// const db = require('../../db')

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Should be changed by Profile.
      user: {},
      loading: true,
      isMounted: ""
    };
  }

  // test if Auth methods work below.
  componentDidMount() {
    const { checkGrav, fetchUsers, fetchUser, matchUsernameForId } = this.props.auth
    // const usersObject = null;
    // fetchUsers();
    // console.log('checking for usersObject', usersObject)
    fetchUser(localStorage.getItem('user_id')).then((userdata) => {
      this.setState({user:userdata});
    });
  } 

  render() {
    console.log('state @ render', this.state)
    const { username, avatar, user } = this.state;
    // Handle conditional render code below
    // if (!this.state.user.balanceHours) {
    //   return (
    //     <div>
    //       Loading... If stats do not render, please try refreshing.{" "}
    //       {profile} - {user.balanceHours}
    //     </div>
    //   );
    // }

    return (
      <div>
        <div className="profile">
          <img
            src={avatar}
            className="profile-default"
            alt="profile"
          />

          <div className="details">
            <ListGroup>
              {/* <div className="userdatalist"> */}
              {/* Changed profile.nickname to profile.name */}
              <div className="userdatalist">
                <div className="username">
                  {/* Can fix the default profile picture sizing issue
                        by resizing the src/images/user-solid.png manually  */}
                  <i className="far fa-user-circle"> {user.username}</i>
                </div>
                <div className="email">
                  <i className="far fa-envelope"> {user.email}</i>
                </div>
                <div className="phone">
                  <i className="fas fa-phone"> {user.phone}</i>
                </div>
                <div className="name">
                  <i className="far fa-user"> {user.given_name + " " + user.family_name}</i>
                </div>
                <div className="userbalance">
                  <i className="far fa-clock"> Balance: {user.balanceHours}</i>
                </div>
                <div className="userqualifier">
                  {/* <i className="far fa-heart"> */}
                  {/* <i className="far fa-bookmark"> */}
                  {/* <i className="far fa-bell"> */}
                  <i className="far fa-thumbs-up">
                    {" "}
                    {/* <button class="pulse-button"> */}
                    {/* <a class="btn-floating pulse"><i class="material-icons">menu</i></a> */}
                    Qualifier: {user.qualifierHours}
                  </i>
                  {/* </button> */}
                </div>
              </div>
              {/* </div> */}
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
