let num = 0;
num += 15;

console.log(num);

if (num % 3 === 0 && num % 5 === 0) // order sequence of checks important
{console.log(`${num} is divisible by 3 and 5`)}
else if (num % 3 === 0)
{console.log(`${num} is divisible by 3`)}
else if (num % 5 === 0)
{console.log(`${num} is divisible by 5`)}
else 
{console.log(`${num} is not divisible by 3 or 5`)}
