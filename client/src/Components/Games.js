import React, { Component } from "react";

class Games extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getGames = () => {
    return this.props.games.map((game) => {
      return game.title;
    });
  };
  render() {
    console.log("games");
    return <div>{this.getGames()}</div>;
  }
}
export default Games;
