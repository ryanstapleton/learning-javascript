
// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// Copying Arrays

// shoppingCart = [345, 375, 765, 123];
// const updatedCart = shoppingCart;
// updatedCart.push(5); 
// console.log(updatedCart); // [ 345, 375, 765, 123, 5 ]
// console.log(shoppingCart); // [ 345, 375, 765, 123, 5 ] -- updatedCart is a reference to shoppingCart

// shoppingCart = [345, 375, 765, 123];
// const updatedCart = shoppingCart.slice(); // old way of making a copy
// updatedCart.push(5); 
// console.log(updatedCart); // [ 345, 375, 765, 123, 5 ]
// console.log(shoppingCart); // [ 345, 375, 765, 123 ]

// Modern way of copying an array
shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5); 
console.log(updatedCart); // [ 345, 375, 765, 123, 5 ]
console.log(shoppingCart); // [ 345, 375, 765, 123 ]

// Spreading out an array
const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(orderTotals)); // NaN

console.log(Math.max(...orderTotals)); // 10

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3

// object deconstruction
const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);