import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
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
      activeItem: "home",
      isLoading: false,
      results: [],
      value: "",
    };
  }
  handleResultSelect = (event, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (event, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.setState({ isLoading: false, results: [], value: "" });

      const result = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (re) => result.test(re.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.users, isMatch),
      });
    }, 300);
  };
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
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
                <Dropdown.Item as={Link} to='/friends'>
                  View Friends
                </Dropdown.Item>
                <Dropdown.Item as={Link} to='/friends'>
                  Friend Requests
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Games</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Manage Games</span>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/games'>
                  View Games
                </Dropdown.Item>
                <Dropdown.Item as={Link} to='/games'>
                  View Friends' Games
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Account</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Manage Account</span>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/account'>
                  View Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to='/account'>
                  Edit Account
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    } else
      return (
        <Menu.Item position='right'>
          <Button as={Link} to='/login'>
            Log in
          </Button>
          <Button
            as={Link}
            to='/signup'
            primary
            style={{ marginLeft: "0.5em" }}
          >
            Sign Up
          </Button>
        </Menu.Item>
      );
  };
  render() {
    console.log("nav render");
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          {/* <Icon name='user circle' color='blue' size='big' /> */}
          <Header.Content>SquadUp</Header.Content>
        </Header>
        <Responsive width={window.innerHeight}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment textAlign='center' style={{ padding: "1em 0em" }} vertical>
              <Menu pointing size='large'>
                <Container>
                  <Menu.Item
                    as={Link}
                    to='/account'
                    name='home'
                    active={this.state.activeItem === "home"}
                    onClick={this.handleItemClick}
                  >
                    Home
                  </Menu.Item>
                  <Menu.Item
                    as={Link}
                    to='/feed'
                    name='Feed'
                    active={this.state.activeItem === "all"}
                    onClick={this.handleItemClick}
                  >
                    All
                  </Menu.Item>
                  <Menu.Item
                    as={Link}
                    to='/games'
                    name='games'
                    active={this.state.activeItem === "games"}
                    onClick={this.handleItemClick}
                  >
                    Games
                  </Menu.Item>
                  <Menu.Item
                    as={Link}
                    to='/friends'
                    name='friends'
                    active={this.state.activeItem === "friends"}
                    onClick={this.handleItemClick}
                  >
                    Friends
                  </Menu.Item>
                  <Menu.Item position='right'>
                    {" "}
                    <Search
                    // loading={this.state.isLoading}
                    // onResultSelect={this.handleResultSelect}
                    // onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    //   leading: true,
                    // })}
                    // results={this.state.results}
                    // value={this.state.value}
                    // resultRenderer={resultRenderer}
                    // {...this.props}
                    />{" "}
                  </Menu.Item>
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
