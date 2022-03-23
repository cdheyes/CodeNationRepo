// functions

let n = 0;

const factorial = (num) => {
	if ((n === 0) || (n === 1)) {
		return 1;
	} else { return (n * factorial(n-1))}
}


console.log (factorial(33));

// console.log("Hello world");