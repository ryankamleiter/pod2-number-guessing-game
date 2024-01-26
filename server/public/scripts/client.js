function onReady() {
  console.log("JavaScript is loaded!")
}

onReady()

let tableElement = document.querySelector("tbody");  // We need to make sure 'tbody' appears as the id
                                                        // in the index.html file
                                                        // not sure if this should be a global variable or not

function addGuess(){

  console.log('in function addGuess');


//TODO:  Ask Keef about if we need ids for this tomorrow
  let playerOneGuess = document.getElementById("").value
  let playerTwoGuess = document.getElementById("").value
  let playerThreeGuess = document.getElementById("").value
  let playerFourGuess = document.getElementById("").value

}

function getGuess(){
  
  //get guess from the server using Axios

  axios({
    method:  'GET',
    url:  '/guesses'
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
  outputElement.innerHTML += '';
}

// Add the guesses and the difference between guess and random number to the DOM

//DO WE WANT TO PUT THIS INFORMATION IN A TABLE??  (ASK GROUP)
//ASK:  How do we differentiate the players guesses from one another??
//ASK:  What should the for statement be in order to loop through the array??
// ASK:  Can we create separate ids for each of the td's below??
for (let guess of guesses){
  tableElement.innerHTML += `
    <tr>
      <td>
        <p>${newGuess.guess}</p>
        <p>${newGuess.distanceFromGuess}</p>
      </td>
      <td>
        <p>${newGuess.guess}</p>
        <p>${newGuess.distanceFromGuess}</p>
      </td>
      <td>
        <p>${newGuess.guess}</p>
        <p>${newGuess.distanceFromGuess}</p>
      </td>
      <td>
        <p>${newGuess.guess}</p>
        <p>${newGuess.distanceFromGuess}</p>
      </td>
        `
}



function displayResult(){
if (distanceFromGuess > randomNumber){
  return "Too high";}
else if (distanceFromGuess < randomNumber){
  return "Too low";}
else (distanceFromGuess === 0){
  return "Correct!"
}
}

function displayGuesses(){

let newGuess = document.getElementById('').value;  //need to fill in the id

axios({
  method: 'POST',
  url: '/guesses',
  data: {  
      newGuesses: {         //TODO:  Confirm this object is correct
          guess: newGuess
      }
  }
})
  .then(function (response) { 
      console.log("Request to POST /quotes succeeded with status:", response.status);  

      document.getElementById('').value = ''; // TODO:  Will need to fill in ID

      
     getGuess();
  })
  .catch(function (error) { 
      alert('Request to POST /guesses failed. Try again later.');
      console.error('Request to POST /guesses failed:', error);
  });
  

}