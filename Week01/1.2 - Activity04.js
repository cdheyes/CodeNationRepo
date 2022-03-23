let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";


let myGrid = [
`   |   |   `, 
` ${space1} | ${space2} | ${space3} `, 
`   |   |   `, 
`-----------`, 
`   |   |   `, 
` ${space4} | ${space5} | ${space6} `, 
`   |   |   `, 
`-----------`, 
`   |   |   `, 
` ${space7} | ${space8} | ${space9} `, 
`   |   |   `];


let i = 0;

for(i = 0; i < myGrid.length; i++)
{
    console.log(myGrid[i])
};
