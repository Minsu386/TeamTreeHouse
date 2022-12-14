const middle = ['lettuce', 'cheese', 'patty'];

// to add middle array to burger arry append 3 periods
const burger = ['top bun', ...middle, 'bottom bun'];

const brass = [ 'trumpet', 'trombone', 'french horn', 'bariton', 'tuba'];
const woodwind = [ 'flute', 'oboe', 'clarinet', 'saxophone', 'basoon'];
const instruments = [...brass, ...woodwind]

console.log(instruments);

let numbers = [10,  20, 30, 40, 50]

console.log( Math.max(numbers)) // returns NaN
console.log( Math.max(...numbers)) //expands the array and will not show 50

console.log(numbers.length);