// objects

let total = 0;

let myDrink = "";
let myFood = "";

const coffeeShop = {
	
    branch: 'Sids Cafe',
      
    drink: {
        water: 0.50,
        coffee: 2.00,
        tea: 1.50,
    },
      
    food: {
        toast: 1.50,
        nuts: 0.50,
        cake: 2.00,
    },

    drinksOrdered(myDrink){ 
        for ( let key in this.drink ) {
            if (myDrink == key){
            console.log(`${key}`);
            console.log(this.drink[myDrink]);
            total += this.drink[myDrink];
            };
        };
    },

    foodOrdered(myFood){ 
      for ( let key in this.food ) {
          if (myFood == key){
          console.log(`${key}`);
          console.log(this.food[myFood]);
          total += this.food[myFood];
          };
      };
  },
  
}

coffeeShop.drinksOrdered("tea");
coffeeShop.foodOrdered("cake");
console.log(`Your bill is ${total}`);

