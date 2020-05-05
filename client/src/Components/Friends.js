import React, { Component } from "react";
import { Button, Card, Confirm } from "semantic-ui-react";

class Friends extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  getFriends = () => {
    return this.props.user.friends.map((friend, index) => {
      return (
        <>
          <Card>
            <Card.Content>
              <Card.Header>{friend.username}</Card.Header>
              <Card.Meta>Friend</Card.Meta>
              <Card.Description>
                {friend.username} is your friend
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button basic color='red' onClick={this.open}>
                Remove Friend
              </Button>
              <Confirm
                open={this.state.open}
                onCancel={this.close}
                onConfirm={this.close}
              />
            </Card.Content>
          </Card>
        </>
      );
    });
  };

  getFriendRequests = () => {
    return this.props.user.inverse_friendships.map((friendship) => {
      if (friendship.confirmed == false)
        return (
          <>
            <Card>
              <Card.Content>
                <Card.Header>{friendship.user.username}</Card.Header>
                <Card.Meta>Friends Request</Card.Meta>
                <Card.Description>
                  {friendship.user.username} sent you a friend request
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button
                    basic
                    color='green'
                    // onClick={this.props.acceptFriendRequest(friendship.id)}
                    onClick={this.open}
                  >
                    Accept
                  </Button>
                  <Confirm
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.props.acceptFriendRequest(friendship.id)}
                  />
                  <Button
                    basic
                    color='red'
                    // onClick={this.props.deleteFriendship(friendship.id)}
                    onClick={this.open}
                  >
                    Reject
                  </Button>
                  <Confirm
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.props.deleteFriendship(friendship.id)}
                  />
                </div>
              </Card.Content>
            </Card>
          </>
        );
    });
  };

  getPendingFriends = () => {
    return this.props.user.friendships.map((friendship) => {
      if (friendship.confirmed == false)
        return (
          <>
            <Card>
              <Card.Content>
                <Card.Header>{friendship.friend.username}</Card.Header>
                <Card.Meta>Friend Request</Card.Meta>
                <Card.Description>
                  {friendship.friend.username} has not responded to your request
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button basic color='red' onClick={this.open}>
                  Cancel
                </Button>
                <Confirm
                  open={this.state.open}
                  onCancel={this.close}
                  onConfirm={this.props.deleteFriendship(friendship.id)}
                />
              </Card.Content>
            </Card>
          </>
        );
    });
  };

  render() {
    return (
      <div>
        {this.props.user.username}
        <br />
        Friends
        <Card.Group>{this.getFriends()}</Card.Group>
        <br />
        Friend Reqs
        <Card.Group>{this.getFriendRequests()}</Card.Group>
        <br />
        Pending Reqs
        <Card.Group>{this.getPendingFriends()}</Card.Group>
      </div>
    );
  }
}
export default Friends;
