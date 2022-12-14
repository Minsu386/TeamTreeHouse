function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for ( let counter = 0; counter < 10; counter++ ) {
  console.log( `The random number is ${getRandomNumber(10)}` );
}