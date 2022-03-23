let topping = "pinapple";

switch (true) {
    case topping == "cheese": console.log(`${topping} is a must!`); break;
    case topping == "tomato": console.log(`You need ${topping} on a pizza!`); break;
    case topping == "olives": console.log(`${topping} - you either love em or hate em. I love em!`); break;
    case topping == "pinapple": console.log(`${topping} does NOT belong on pizza!`); break;
    default: console.log(`If you want ${topping} go for it`); // works same as else in an if statement
}
