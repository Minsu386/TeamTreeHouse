class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    } 

    get activity() {
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20) {
            return 'playing';
        } else {
            return 'sleeping';
        }
    }

    speak() {
        console.log(this.sound);
    }


}




const artie = new Pet('dog', 1, 'dauchshund', 'yip yip');
const lulu = new Pet('dog', 12, 'border collie', 'woof woof');

artie.speak();
lulu.speak();

console.log(artie.activity)