import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Account from "./Components/Account";
import Game from "./Components/Game";
import Games from "./Components/Games";
import NavBar from "./Components/NavBar";

let mounts = 4;
let updates = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      friends: [],
      friendships: [],
      stats: [],
      accounts: [],
      users: [],
      games: [],
      targetGame: {},
      logged_in: false,
      render: false,
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.getUsers();
    this.getAccounts();
    this.getFriendships();
    this.getGames();
    this.getTargetGame(1);
    this.getStats();
    console.log("mounted end");
  }

  componentDidUpdate() {
    console.log("update");
    console.log("users:");
    console.table(this.state.users);
    console.log("user:");
    console.log(this.state.user);
    console.log("friends:");
    console.log(this.state.friends);
    console.log("accounts");
    console.log(this.state.accounts);
    console.log("friendships:");
    console.log(this.state.friendships);
    console.log("targetGame:");
    console.log(this.state.targetGame);
    console.log("games:");
    console.log(this.state.games);
    console.log("stats:");
    console.log(this.state.stats);
    console.log("update done");
  }

  componentDidCatch;

  getBen = () => {
    console.log("getting Ben");
    fetch("http://localhost:3001/users/11", { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
  };

  getBenStats = () => {
    fetch(`https://fortnite-api.p.rapidapi.com/stats/I%20o%20BB%20o%20I`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
        "x-rapidapi-key": "1d54e391b9msh2ac664a56fed0d8p1d7913jsn7d463e8a8620",
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ stats: data }));
  };

  getUser = () => {
    console.log("getting user");
    fetch(`http://localhost:3001/users/${this.state.user.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
  };

  getUserById = (id) => {
    fetch(`http://localhost:3001/users/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
  };

  getFriends = () => {
    console.log("getting friends");
    fetch(`http://localhost:3001/users/${this.state.user.id}/friends`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ friends: data }));
  };

  // getStats = () => {
  //   fetch(`https://fortnite-api.p.rapidapi.com/stats/I%20o%20BB%20o%20I`, {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
  //       "x-rapidapi-key": "1d54e391b9msh2ac664a56fed0d8p1d7913jsn7d463e8a8620",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ stats: data }));
  // };

  getUsers = () => {
    console.log("getting users");
    fetch("http://localhost:3001/users/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  };

  getAccounts = () => {
    console.log("getting accounts");
    fetch("http://localhost:3001/accounts/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ accounts: data }));
  };

  getFriendships = () => {
    console.log("getting friendships");
    fetch("http://localhost:3001/friendships/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ friendships: data }));
  };

  getGames = () => {
    console.log("getting games");
    fetch(`http://localhost:3001/games`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ games: data }));
  };

  getTargetGame = (id) => {
    console.log("getting targetGame");
    fetch(`http://localhost:3001/games/${id}/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ targetGame: data }));
  };

  getStats = () => {
    console.log("getting stats");
    fetch("http://localhost:3001/stats/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ stats: data }));
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
      if (user.pass === input.password) {
        console.log("pw match");
        console.log("new user", user);
        this.getUserById(user.id);
        this.getFriends();
        if (this.state.user != {}) {
          this.setState({
            logged_in: true,
          });
        }
      } else {
        console.log("wrong pw");
      }
    }
  };

  render() {
    console.log("mounts: ", mounts, "updates: ", updates);
    if (this.state.stats.length != 0) {
      return (
        <Router>
          <div className='App'>
            <NavBar user={this.props.user} logged_in={this.props.logged_in} />
            <Switch>
              {/* <Route path='/' exact component={Home} /> */}
              <Route exact path='/'>
                {this.state.logged_in ? (
                  <Redirect to='/account' />
                ) : (
                  <Redirect to='/login' />
                )}
              </Route>
              />
              <Route
                exact
                path='/login'
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
                path='/signup'
                component={() => (
                  <Signup
                    user={this.state.user}
                    handleLogin={this.handleLogin.bind(this)}
                    logged_in={this.state.logged_in}
                  />
                )}
              />
              <Route
                exact
                path='/account'
                component={() => (
                  <Account
                    user={this.state.user}
                    friends={this.state.friends}
                    stats={this.state.stats}
                    accounts={this.state.accounts}
                    friendships={this.state.friendships}
                  />
                )}
              />
              <Route
                exact
                path='/games'
                component={() => (
                  <Games
                    user={this.state.user}
                    friends={this.state.friends}
                    stats={this.state.stats}
                    accounts={this.state.accounts}
                    friendships={this.state.friendships}
                    games={this.state.games}
                    targetGame={this.state.targetGame}
                  />
                )}
              />
              <Route
                exact
                path='/game'
                component={() => (
                  <Game
                    user={this.state.user}
                    friends={this.state.friends}
                    stats={this.state.stats}
                    accounts={this.state.accounts}
                    friendships={this.state.friendships}
                    games={this.state.games}
                    targetGame={this.state.targetGame}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      );
    } else return <div>Loading...</div>;
  }
}

export default App;
