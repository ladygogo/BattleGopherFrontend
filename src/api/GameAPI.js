// const fetchWineByID = (wineID) => {
//   return fetch(`https://cors-anywhere.herokuapp.com/https://pure-coast-15116.herokuapp.com/wines/${wineID}`)
//     .then((response) => response.json());
// }

// const fetchWines = () => {
//   return fetch(`https://cors-anywhere.herokuapp.com/https://pure-coast-15116.herokuapp.com/wines`)
//     .then((response) => response.json());
// }

const newGame = (gameObject) => {
  return fetch('http://localhost:8080/newgame', {
    headers: {
      'Content-Type': 'text/json'
    },
    method: 'POST',
    body: JSON.stringify(gameObject),
  })
}

export default {
  // fetchWineByID: fetchWineByID,
  // fetchWines: fetchWines,
  newGame: newGame
}