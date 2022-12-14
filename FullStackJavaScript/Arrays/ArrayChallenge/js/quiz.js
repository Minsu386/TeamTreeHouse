// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
  ['How many 5 letter countries are there?', '24'],
  ['In Ancient Mesopotamia people worshiped what?', 'pigeons'],
  ['What is the official name of the Twitter bird?', 'larry'], 

];

// 2. Store the number of questions answered correctly.
const correctAnswer = [];
const incorrectAnswer = [];
let correct = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for ( let i = 0; i < quiz.length; i++ ) {
  let question = quiz[i][0];
  let answer  = quiz[i][1];
  let response = prompt(question)
  
  if ( response === answer ) {
    correct++;
    correctAnswer.push(question);
  } else {
    incorrectAnswer.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}


// 4. Display the number of correct answers to the user
let html = `
  <h1> you got ${correct} question(s) correct</h1>
  <h2> You got these qeustions right:  </h2>
  <ol>${ createListItems(correctAnswer) }</ol>

  <h2> You got these questions wrong:  </h2>
  <ol>${ createListItems(incorrectAnswer) }</ol>
`;

document.querySelector('main').innerHTML = html;