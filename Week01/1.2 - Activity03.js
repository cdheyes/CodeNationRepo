let today = new Date();
let birthday = new Date("07/18/2022");  
let timeToBirthday = birthday - today;
timeToBirthday /= 1000*3600*24;

// output //
console.log(Math.round(timeToBirthday)+" days until your birthday");