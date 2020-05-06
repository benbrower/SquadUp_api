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

  //   open = () => this.setState({ open: true });
  //   close = () => this.setState({ open: false });

  //   handleConfirm = (id) => {
  //     this.props.deleteFriendship(id);
  //     this.setState({ open: false });
  //   };
  handleClick = () => {
    console.log(this.props.friendship.id);
    this.props.deleteFriendship(this.props.friendship.id);
  };

  toggleVisibility = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
    this.handleViewAccount();
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
          <Transition
            visible={this.state.visible}
            animation='scale'
            duration={500}
          >
            <Button
              as={Link}
              to='/view_account'
              name='view_account'
              onClick={this.hideLink}
            >
              View {this.props.friend.username}
            </Button>
          </Transition>
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
