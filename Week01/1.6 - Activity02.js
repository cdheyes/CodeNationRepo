// objects

const pet = {
    name : "Willow",
    type : "cat",
    age : 10,
    colour : "brown",
    eat (){
        return `${this.name} is eating`
    },
    drink (){ 
        return `${this.name} is drinking`
    },
    
}

console.log(pet.drink());
