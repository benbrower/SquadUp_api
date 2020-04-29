import React, { Component } from "react";

class Account extends Component {
    _isMounted = false;
  constructor() {
    super();
    this.state = {
      user: {},
      stats: {},
    };
  }

  componentDidMount(){
      this._isMounted=true;
    fetch(`http://localhost:3001/users/11`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
    fetch(`https://fortnite-api.p.rapidapi.com/stats/I%20o%20BB%20o%20I`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
        "x-rapidapi-key": "1d54e391b9msh2ac664a56fed0d8p1d7913jsn7d463e8a8620",
      },
    })
      .then((res) => res.json())
      .then((data) =>{ if(this._isMounted) { this.setState({ stats: data })}});
    console.log(this.state.stats);
  };

  getStats() {
    fetch(`https://fortnite-api.p.rapidapi.com/stats/I%20o%20BB%20o%20I`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
        "x-rapidapi-key": "1d54e391b9msh2ac664a56fed0d8p1d7913jsn7d463e8a8620",
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ stats: data }))
      .then(console.log(this.state.stats));
  }

  render() {
    return <div>{}</div>;
  }
}
export default Account;
