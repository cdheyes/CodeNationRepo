// Activity 06
let num = 0;

let beatles = ["John", "Paul", "George", "Ringo"];
let roses = ["Ian", "John", "Mani", "Reni"];

for (i = 0; i < beatles.length; i++){
  for (i2 = 0; i2 < roses.length; i2++){
    if (beatles[i] == roses[i2]){
      console.log(`${beatles[i]} and ${roses[i2]} are the same!!!`);
    }
    else console.log(`${beatles[i]} and ${roses[i2]} - NO match`);
  }
}
