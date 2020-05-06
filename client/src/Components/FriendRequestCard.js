import React, { Component } from "react";
import { Button, Card, Confirm } from "semantic-ui-react";

class FriendRequestCard extends Component {
  handleDeleteFriendship = () => {
    console.log(this.props.friendship.id);
    this.props.deleteFriendship(this.props.friendship.id);
  };

  handleAcceptFriendship = () => {
    console.log(this.props.friendship.id);
    this.props.acceptFriendRequest(this.props.friendship.id);
  };
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.friendship.user.username}</Card.Header>
          <Card.Meta>Friends Request</Card.Meta>
          <Card.Description>
            {this.props.friendship.user.username} sent you a friend request
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={this.handleAcceptFriendship}>
              Accept
            </Button>
            <Button basic color='red' onClick={this.handleDeleteFriendship}>
              Reject
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
export default FriendRequestCard;
