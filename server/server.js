const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5001;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.use(express.json());

// Fill in array name with group approved name (currently guessesArray)
const guessesArray = [
  {
    guess: '',
    distanceFromGuess: ''
  },
  {
    guess: '',
    distanceFromGuess: ''
  },
  {
    guess: '',
    distanceFromGuess: ''
  },
  {
    guess: '',
    distanceFromGuess: ''
  }
]
// Fill in first parameter (currently '/guesses') with get route
app.get('/guesses', (req, res) => {
  res.send(guessesArray)
})
// Fill in first parameter (currently '/guesses') with post route
app.post('/guesses', function (req, res) {
  console.log(req.body);
  let newGuess = req.body;

  guessesArray.push({
    guess: newGuess.guess,
    distanceFromGuess: newGuess.distanceFromGuess
  })

  console.log('Guesses array', guessesArray);

  res.send(200);
})

function randomNumber(max) {
  return Math.floor(Math.random() * max)
}
console.log(randomNumber(25));
app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
