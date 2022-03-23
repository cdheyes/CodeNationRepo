// Activity 07 - While loop - checks only until samename is true

let beatles = ["Paul", "George", "John", "Ringo"];
let roses = ["Ian", "Mani", "Reni", "John"];
let samename = false
let i = 0;
let i2 = 0;

while (i < beatles.length && samename == false)
{
    for (i2 = 0; i2 < roses.length; i2++){
      if (beatles[i] == roses[i2]){
        console.log(`${beatles[i]} and ${roses[i2]} are the same!!!`);
        samename = true;
        i2 = roses.length;
      }
      else console.log(`${beatles[i]} and ${roses[i2]} - NO match`);
    }
    i++;
}
