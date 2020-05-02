import React, { Component } from "react";
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
  Responsive,
} from "semantic-ui-react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      form: "login",
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUserChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleLogin(this.state);
  };

  changeForm = (event) => {
    this.setState({
      form: event.target.value,
    });
  };

  getHeader = () => {
    let message = "";
    this.props.logged_in
      ? (message = `Welcome, ${this.props.user.username}`)
      : (message = `Log In or Sign Up`);
    return (
      <Container text>
        <Header as='h2' icon textAlign='center' color='blue'>
          <Icon name='user circle outline' circular />
          <Header.Content>{message}</Header.Content>
        </Header>
      </Container>
    );
  };

  render() {
    return this.props.logged_in ? (
      <>
        <div>
          Welcome, {this.props.user.username}
          {this.getHeader()}
          <Button as={Link} to='/account' name='account' attached='bottom'>
            View Account
          </Button>
        </div>
      </>
    ) : (
      <div>
        <Responsive width={window.innerHeight}>
          {this.getHeader()}
          <Form onSubmit={this.handleSubmit}>
            <Divider hidden section />
            <Button.Group attached='top' size='big'>
              <Button
                as={Link}
                to='/login'
                name='login'
                onClick={this.changeForm}
              >
                Log In
              </Button>
              <Button.Or />
              <Button name='signup' onClick={this.changeForm} color='blue'>
                Sign Up
              </Button>
            </Button.Group>
            <Divider section />
            <Form.Field>
              <label>
                Email:
                <input
                  placeholder='Email Address'
                  id='email'
                  name='email'
                  type='text'
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label>
                Username:
                <input
                  placeholder='Username'
                  id='username'
                  name='username'
                  type='text'
                  onChange={this.handleUserChange}
                  value={this.state.username}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label>
                Password:
                <input
                  placeholder='Password'
                  id='password'
                  name='password'
                  type='password'
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                />
              </label>
            </Form.Field>
            <div>
              <Button type='submit'>Log in</Button>
            </div>
          </Form>
        </Responsive>
      </div>
    );
  }
}
export default Signup;
