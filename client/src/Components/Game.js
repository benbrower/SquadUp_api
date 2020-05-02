import React, { Component } from "react";

class Game extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.targetGame.title} <br />
        {this.props.targetGame.users.length} <br />
        {this.props.targetGame.followed_games.length}
      </div>
    );
  }
}
export default Game;
