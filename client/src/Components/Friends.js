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

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

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
          />
        )
      );
    return friendCards;
  };

  getFriendRequestCards = () => {
    let cards = [];
    this.props.user.inverse_friendships.map((friendship) => {
      if (friendship.confirmed == false)
        cards.push(
          <FriendRequestCard
            key={friendship.id}
            deleteFriendship={this.props.deleteFriendship}
            acceptFriendRequest={this.props.acceptFriendRequest}
            friendship={friendship}
            getTargetUser={this.props.getTargetUser}
          />
        );
    });
    return cards;
  };

  getPendingFriends = () => {
    let cards = [];
    return this.props.user.friendships.map((friendship) => {
      if (friendship.confirmed == false)
        cards.push(
          <PendingFriendCard
            key={friendship.id}
            deleteFriendship={this.props.deleteFriendship}
            friendship={friendship}
            getTargetUser={this.props.getTargetUser}
            targetUser={this.props.targetUser}
          />
        );
    });
    return cards;
  };

  render() {
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
