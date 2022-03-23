// functions

const PIN = 123456;
let enteredPIN = 123456;
let balance = 20;

const cashMachine = (enteredPIN, withdraw) => {
	if (enteredPIN != PIN) {
		return (`${enteredPIN} is an incorrect PIN`);
	} 
	else if (withdraw > balance) {
		return (`${withdraw} is greater than your balance`);
	}
	else {
		balance -= withdraw;
		return (`Here's your cash. Your balance is ${balance}`);
	}
}

console.log(cashMachine(enteredPIN, 21));
