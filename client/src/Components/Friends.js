import React, { Component } from "react";

class Friends extends Component {
  getFriends = () => {
    return this.props.user.friends.map((friend, index) => {
      return (
        <>
          <br />
          {friend.username}
        </>
      );
    });
  };

  getFriendRequests = () => {};

  render() {
    return (
      <div>
        {this.props.user.username}
        <br />
        {this.getFriends()}
      </div>
    );
  }
}
export default Friends;
