let num = 0;

for (i = 0; i < 6; i++){
  num = Math.floor(Math.random() * 30) + 1;
  if (num % 7 == 0){
    console.log(`${num} is divisible by 7`);
  } 
  else console.log(`${num} is NOT divisible by 7`);
}



//console.log();