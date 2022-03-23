// functions

let orderCount = 0;
let topping = "";
let topping2 = "";

const takeOrder = (topping, topping2) => {
	orderCount++;
	console.log(`Order no.${orderCount}`);
	console.log(`Pizza with ${topping} and ${topping2}`);
}

takeOrder("peppers", "olives");
takeOrder("cheese", "onion");