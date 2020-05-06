import React, { Component } from "react";
import { Button, Card, Confirm } from "semantic-ui-react";

class PendingFriendCard extends Component {
  handleDeleteFriendship = () => {
    console.log(this.props.friendship.id);
    this.props.deleteFriendship(this.props.friendship.id);
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.friendship.friend.username}</Card.Header>
          <Card.Meta>Friend Request</Card.Meta>
          <Card.Description>
            {this.props.friendship.friend.username} has not responded to your
            request
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color='red' onClick={this.handleDeleteFriendship}>
            Cancel
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
export default PendingFriendCard;
