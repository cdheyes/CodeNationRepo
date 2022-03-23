let num = "0123210";

let rev = num.split(``);
rev = rev.reverse(); 
rev = rev.join(``);

if (num == rev)
{console.log(`${num} is a pallindrome of ${rev}`)}
else 
{console.log(`${num} is not a pallindrome of ${rev}`)}
