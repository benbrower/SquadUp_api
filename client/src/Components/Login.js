import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
} from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return this.props.logged_in ? (
      <>
        <div>
          Welcome, {this.props.user.username}
          <NavLink to='/account'>
            <Button name='account'>View Account</Button>
          </NavLink>
        </div>
      </>
    ) : (
      <div>
        <Container text>
          <Header as='h2' icon textAlign='center' color='blue'>
            <Icon name='user circle outline' circular />
            <Header.Content>Welcome</Header.Content>
          </Header>
        </Container>
        <Form onSubmit={this.handleSubmit}>
          <Divider hidden section />
          <Button.Group attached='top' size='big'>
            <Button name='login' onClick={this.changeForm} color='blue'>
              Login
            </Button>
            <Button.Or />
            <NavLink to='/signup'>
              <Button name='signup' onClick={this.changeForm}>
                Sign Up
              </Button>
            </NavLink>
          </Button.Group>
          <Divider section />
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
                id='passsword'
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
      </div>
    );
  }
}
export default Login;