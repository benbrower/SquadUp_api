import React, { Component } from "react";
import { Button, Card, Confirm } from "semantic-ui-react";
import FriendCard from "./FriendCard";
import FriendRequestCard from "./FriendRequestCard";
import PendingFriendCard from "./PendingFriendCard";

class Friends extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getUser = () => {
    console.log("getting user");
    fetch(`http://localhost:3001/users/${this.props.user.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
  };

  handleDeleteFriendship = (id) => {
    console.log(id);
    this.props.deleteFriendship(id);
  };

  handleAcceptFriendship = (id) => {
    console.log(id);
    this.props.acceptFriendRequest(id);
  };
  getFriendCards = () => {
    let friendCards = [];
    if (this.props.user.friendships)
      this.props.user.friendships.map((friendship) =>
        friendCards.push(
          <FriendCard
            key={friendship.id}
            deleteFriendship={this.props.deleteFriendship}
            friendship={friendship}
            friend={friendship.friend}
            getTargetUser={this.props.getTargetUser}
            getUser={this.props.getUser}
          />
        )
      );
    if (this.props.user.inverse_friendships)
      this.props.user.inverse_friendships.map((friendship) =>
        friendCards.push(
          <FriendCard
            key={friendship.id}
            deleteFriendship={this.props.deleteFriendship}
            friendship={friendship}
            friend={friendship.user}
            getTargetUser={this.props.getTargetUser}
            getUser={this.props.getUser}
          />
        )
      );
    return friendCards;
  };

  getFriendRequestCards = () => {
    let cards = [];
    this.props.user.inverse_friendships.map((friendship) => {
      console.log(friendship);
      if (friendship.confirmed == false)
        cards.push(
          <FriendRequestCard
            key={friendship.id}
            deleteFriendship={this.props.deleteFriendship}
            acceptFriendRequest={this.props.acceptFriendRequest}
            friendship={friendship}
            friend={friendship.user}
            getTargetUser={this.props.getTargetUser}
            getUser={this.props.getUser}
          />
        );
    });
    return cards;
  };

  getPendingFriends = () => {
    let cards = [];
    this.props.user.friendships.map((friendship) => {
      console.log(friendship.confirmed);
      if (friendship.confirmed == false)
        cards.push(
          <PendingFriendCard
            key={friendship.id}
            deleteFriendship={this.props.deleteFriendship}
            friendship={friendship}
            friend={friendship.friend}
            getTargetUser={this.props.getTargetUser}
            targetUser={this.props.targetUser}
            getUser={this.props.getUser}
          />
        );
    });
    console.log(cards);
    return cards;
  };

  render() {
    // this.getUser();
    return (
      <div>
        {this.props.user.username}
        <br />
        Friends
        <Card.Group>{this.getFriendCards().map((card) => card)}</Card.Group>
        <br />
        Friend Reqs
        <Card.Group>
          {this.getFriendRequestCards().map((card) => card)}
        </Card.Group>
        <br />
        Pending Reqs
        <Card.Group>{this.getPendingFriends().map((card) => card)}</Card.Group>
      </div>
    );
  }
}
export default Friends;
