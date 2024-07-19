const name = " Shubham "
const repoCount = 2

//console.log(name +  repoCount + "  value");

console.log(`Hello my name is ${name} , my repoCount is ${repoCount}`);

const gameName = new String ('Shubha-KB')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase () );
console.log(gameName.charAt ('6') );

console.log(gameName.indexOf('a') );

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-9, 8)
console.log(anotherString);

const newStringOne = "     Shubham     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20banugade"

console.log(url.replace('%20' , '-'));

console.log(url.includes('shubham'));

console.log(gameName.split('-'));
