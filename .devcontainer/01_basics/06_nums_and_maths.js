const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(4));

const otherNumber = 134.9466

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


//***************************MAths**************************************88 */

console.log(Math);
console.log(Math.abs(-4));
// only negative value convert in to positive value
console.log(Math.round(4.3));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4 , 3 , 5 , 7 ,9 ));
console.log(Math.max(4 , 3 , 5 , 7 ,9 ));

console.log(Math.random());
console.log((Math.random()*10) + 1 );
console.log((Math.random()*10) + 1 );

const min = 10
const max = 20

console.log(Math.floor(Math.random () * (max - min + 1)) + min)