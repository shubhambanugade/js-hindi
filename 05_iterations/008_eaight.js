const myNums = [ 1 , 2 , 3]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// } , 0)

const myTotal = myNums.reduce( (acc , currval) => (acc + currval) , 0)

// console.log(myTotal);



const ShoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 1999
    },
    {
        itemName : "mobile dev course",
        price : 6999
    },
    {
        itemName : "data science course",
        price : 12999
    },
]

const priceToPay = ShoppingCart.reduce( (acc , item) => acc + item.price , 299 )
console.log(priceToPay);