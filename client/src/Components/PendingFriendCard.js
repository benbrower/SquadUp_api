import React, { Component } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PendingFriendCard extends Component {
  handleDeleteFriendship = () => {
    console.log(this.props.friendship.id);
    this.props.deleteFriendship(this.props.friendship.id);
  };

  handleViewAccount = () => {
    console.log("click on ", this.props.friend.id);
    this.props.getTargetUser(this.props.friend.id);
    // this.toggleVisibility();
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header
            onClick={this.handleViewAccount}
            as={Link}
            to='/view_account'
            name='view_account'
          >
            <Icon
              name='user circle outline'
              color='blue'
              size='big'
              floated='right'
            />
            {this.props.friendship.friend.username}
          </Card.Header>
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
