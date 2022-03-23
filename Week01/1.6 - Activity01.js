// objects

const person = {
	name: "Chris",
    age: 51,
    favSongs: ["Song01", "Song02", "Song03", "Song04"],
    sayHi () {
        return `Hello my name is ${this.name}`; 
    }
};

console.log(person.sayHi());
