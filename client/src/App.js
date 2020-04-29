import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Account from "./Components/Account";



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      user_id: '',
      users: [],
      logged_in: false,
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.getUsers();
    console.log("users:");
    console.table(this.state.users);
    this.getBen();
    console.log(this.state.user)
  }

  getBen = () => {
    console.log("getting Ben");
    fetch("http://localhost:3001/users/11", { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({user: data}));
  };

  getUsers = () => {
    console.log("getting users");
    fetch("http://localhost:3001/users/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  };

  handleLogout = (event) => {
    console.log("logout");
    this.setState({
      user: {},
      logged_in: false,
    });
  };

  handleLogin = (input) => {
    // event.preventDefault();
    console.log("handleLogin");
    console.log("info provided: ");
    console.log("user:", input.username);
    console.log("pw:", input.password);
    console.log(this.state.users);
    const user = this.state.users.find(
      (user) => user.username === input.username
    );
    if (!user) {
      console.log("user not found");
    } else {
      console.log("user found");
      if (user.password === input.password) {
        console.log("pw match");
        this.setState({
          user: user,
          logged_in: true,
        });
      } else {
        console.log("wrong pw");
      }
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* <Route path='/' exact component={Home} /> */}
            {/* <Route component={NotFound} /> */}
            <Route
              exact
              path="/"
              component={() => (
                <Login
                  user={this.state.user}
                  handleLogin={this.handleLogin.bind(this)}
                  logged_in={this.state.logged_in}
                />
              )}
            />
            <Route
              exact
              path="/account"
              component={() => (
                <Account
                  user={this.state.user}
                />
              )}
            />
            <Route
            exact
            path="/signup"
            component={() => (
              <Signup
                user={this.state.user}
                handleLogin={this.handleLogin.bind(this)}
                logged_in={this.state.logged_in}
              />
            )}
          />
          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
