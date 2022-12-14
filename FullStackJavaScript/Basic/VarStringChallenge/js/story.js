// 1. Declare variables and capture input.
let verb = prompt(`Enter a verb: `);
let noun = prompt(`Enter a noun: `);
let adjective = prompt(`Enter an adjective: `);
console.log(verb);
console.log(noun);
console.log(adjective);
// 2. Combine the input with other words to create a story.
"<p>There once was a(n) [adjective] programmer who wanted to use \
    JavaScript to [verb] the [noun].</p>"

    const sentence = `<p>There once was a(n) ${adjective} programmer who wanted to use \
    JavaScript to ${verb} the ${noun}.</p>`
    console.log(sentence);

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = sentence;
