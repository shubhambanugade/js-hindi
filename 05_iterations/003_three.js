//  for of

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello world !"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
}


// maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF America")
map.set('FR', "FRANCE")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, `:-`, value);
}

const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

// for (const [key , value] of myObject) {     
//     console.log(key , `:-` , value);            // for of loop not eterate inobject
// }


