import React, { Component } from 'react';
import './Game.css';
// import WineList from '../components/WineList/WineList.js';
// import WineAPI from '../api/WineAPI.js';

class Game extends Component {
  state = {
    game: []
  }



  componentDidMount() {

  }

  render() {
    console.log(this.props.location.state.board_dimension)
    let bd = this.props.location.state.board_dimension;

    return (
    <div class="board">
      <div class="displays">
        <div class="top">
          <div class="grid">
           { [...Array(bd).keys()].map((row) => {
             return <div>
                { [...Array(bd).keys()].map((col) => {
                 return <button class="btn" data-row={row} data-col={col}>_</button>
                })
              }
              </div>
           })
          }
          </div>
        </div>
        <div class="bottom">
          <ul class="grid"></ul>
        </div>
      </div>
    </div>
    );
  }
}

export default Game;