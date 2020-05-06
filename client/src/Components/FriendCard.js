import React, { Component } from "react";
import { Button, Card, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";

class FriendCard extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  handleClick = () => {
    console.log(this.props.friendship.id);
    this.props.deleteFriendship(this.props.friendship.id);
    this.props.getUser();
  };

  handleViewAccount = () => {
    console.log("click on ", this.props.friend.id);
    this.props.getTargetUser(this.props.friend.id);
    // this.toggleVisibility();
  };

  hideLink = () => {
    this.setState({ visible: false });
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
            {this.props.friend.username}
          </Card.Header>
          <Card.Meta>Friend</Card.Meta>
          <Card.Description>
            {this.props.friend.username} is your friend
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <Button basic color='red' onClick={this.open}> */}
          <Button
            basic
            color='red'
            onClick={this.handleClick}
            // onClick={this.props.deleteFriendship(this.props.friendship.id)}
            // onClick={this.open()}
          >
            Remove Friend
          </Button>
          {/* <Confirm
            open={open}
            onCancel={this.close()}
            onConfirm={this.handleConfirm(this.props.friendship.id)}
          /> */}
        </Card.Content>
      </Card>
    );
  }
}
export default FriendCard;
