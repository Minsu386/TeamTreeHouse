 const person = {
    name: 'Edward',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
 };

 // Add property to person ^
 person.nickname = 'Duke'

 // Print message to console
 const message = `Hi, I'm ${ person.name }. I live in ${ person.city }. Most know me as ${ person.nickname }` +
 `My age is ${ person.age +1 }. I have ${ person.skills.length } skills: ${person.skills.join(', ')}`;
 console.log(message);