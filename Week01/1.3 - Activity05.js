let num = 15;

console.log(num);

if (num % 3 === 0 && num % 5 === 0) // order sequence of checks important
{console.log("fizz buzz")}
else if (num % 3 === 0)
{console.log("fizz")}
else if (num % 5 === 0)
{console.log("buzz")}
else 
{console.log(`${num} is not divisible by 3 or 5`)}
