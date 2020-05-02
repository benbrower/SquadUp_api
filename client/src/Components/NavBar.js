import React, { Component } from "react";
import {
  Form,
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Dimmer,
  Loader,
  Divider,
  Grid,
  Table,
  Menu,
  Card,
  Image,
  Item,
  Dropdown,
  Responsive,
  Visibility,
  Search,
} from "semantic-ui-react";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      fixed: false,
    };
  }
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
  };
  getDropdown = () => {
    console.log("user nav", this.props.user);
    if (this.props.logged_in) {
      return (
        <Dropdown
          item
          textAlign='bottom'
          simple
          text={this.props.user.username}
        >
          <Dropdown.Menu>
            <Dropdown.Header>Friends</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Friends </span>
              <Dropdown.Menu>
                <Dropdown.Item>View Friends</Dropdown.Item>
                <Dropdown.Item>Friend Requests</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Games</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Manage Games</span>
              <Dropdown.Menu>
                <Dropdown.Item>View Games</Dropdown.Item>
                <Dropdown.Item>View Friends' Games</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Account</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Manage Account</span>
              <Dropdown.Menu>
                <Dropdown.Item>View Profile</Dropdown.Item>
                <Dropdown.Item>Edit Account</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    } else
      return (
        <Menu.Item position='right'>
          <Button as='a'>Log in</Button>
          <Button as='a' primary style={{ marginLeft: "0.5em" }}>
            Sign Up
          </Button>
        </Menu.Item>
      );
  };
  render() {
    console.log("nav render");
    return (
      <div>
        <Responsive width={window.innerHeight}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment textAlign='center' style={{ padding: "1em 0em" }} vertical>
              <Menu pointing size='large'>
                <Container>
                  <Menu.Item as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item as='a'>All</Menu.Item>
                  <Menu.Item as='a'>Games</Menu.Item>
                  <Menu.Item as='a'>Friends</Menu.Item>
                  <Menu.Item as={Search} position='right' />
                  <Menu.Item position='right'>{this.getDropdown()}</Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
        </Responsive>
      </div>
    );
  }
}
export default NavBar;
