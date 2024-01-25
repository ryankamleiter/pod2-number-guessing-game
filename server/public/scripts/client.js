function onReady() {
  console.log("JavaScript is loaded!")
}

onReady()

function addGuess(){

  console.log('in function addGuess');

  // let playerOne = document.getElementById("").value
  // let playerTwo = document.getElementById("").value
  // let playerThree = document.getElementById("").value
  // let playerFour = document.getElementById("").value


  let playerOneGuess = document.getElementById("").value
  let playerTwoGuess = document.getElementById("").value
  let playerThreeGuess = document.getElementById("").value
  let playerFourGuess = document.getElementById("").value

}

function getGuess(){
  
  //get guess from the server using Axios

  axios({
    method:  'GET',
    url:  '<placeholder guess?>'  //NEED TO UPDATE
  })

    .then(function (response) {
        console.log("Request to GET /guess succeeded with status:", response.status);
        console.log ("Response payload:", response.data);

        let guessFromTheServer = response.data
        //append guess to DOM

        renderToDom (guessFromTheServer); 

    })
    .catch (function (error){
        alert ('Request to GET /guess failed.');
        console.log ('Request to GET /guess failed:', error);
        // console.log(error);
        console.error(error);
    });
}

function renderToDom(guess){
  let outputElement = document.getElementById('<PLACEHOLDER>')  //NEED TO UPDATE!
}