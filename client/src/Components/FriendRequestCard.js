import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

class FriendRequestCard extends Component {
  handleDeleteFriendship = () => {
    console.log(this.props.friendship.id);
    this.props.deleteFriendship(this.props.friendship.id);
  };

  handleAcceptFriendship = () => {
    console.log(this.props.friendship.id);
    this.props.acceptFriendRequest(this.props.friendship.id);
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
            {this.props.friendship.user.username}
          </Card.Header>
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
