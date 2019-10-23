import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GameAPI from '../api/GameAPI';

class GameForm extends Component {
  state = {
    redirect: false,
    board_dimension: null
  }
  handleSubmit(event) {
    event.preventDefault();
    const gameObject = {
      player_names: [event.target.elements[0].value, event.target.elements[1].value],
      board_dimension: parseInt(event.target.elements[2].value)
    }
    console.log(gameObject)

    GameAPI.newGame(gameObject)
    .then((response) => response.json())
    .then(jsonRes => {
      localStorage.setItem('sessionId', jsonRes.session_id)
      this.setState({
        redirect: true,
        board_dimension: gameObject.board_dimension,
        player_names: gameObject.player_names
      })
    })
  }

  render() {
    return (
      <div>
      {this.state.redirect && <Redirect to={{
            pathname: '/game',
            state: {
              board_dimension: this.state.board_dimension,
              player_names: this.state.player_names
            }
        }} />}
        <form onSubmit={this.handleSubmit.bind(this)}>
          Player 1: <input type="text" name="player1" /><br/>
          Player 2: <input type="text" name="player2" /><br/>
          Board dimension <input type="number" name="board_dimension" /><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default GameForm;