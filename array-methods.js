// forEach

const months = ['January', 'February', 'April', 'March']
months.forEach(month => console.log(month))

// the callback function also receives two additional parameters, which are:
// index - the index of the element which is currently being iterated
// array - original array which we're looping over

const months = ['January', 'February', 'April', 'March']
months.forEach((month, index, array) => console.log(month, index, array))

// map

const months = ['January', 'February', 'April', 'March']
console.log(months.map((month) => {
  return month.toUpperCase();
}));

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
console.log(users.map(user =>{
   return `${user.name} is ${user.age} years old`; 
}))
console.log(users.map(({ name: Name, age: Age }) => ({Name, Age})));

// find

const users = [
  { name: 'John', age: 34 },
  { name: 'John', age: 20 },
  { name: 'camperCat', age: 10 }
];

console.log(users.find(x=>x.name === 'John'))

// filter

function returnTruthyValues(arr) {
  return arr.filter(Boolean);
}
console.log(returnTruthyValues([7, "ate", "", false, 9]));

console.log(users.filter(x=>x.name === 'John'))

const map = {1 : 'Harry', 2: 'Hermoine', 3: 'Ron'}
console.log(Object.keys(map).filter(key => map[key] === 'Ron'))

// every

const numbers = [3, -5, 6, 6, -6, 0]
console.log(numbers.every(number=> number > 0))

function mutation(arr) {
  return arr[1].toLowerCase().split("").
        every(x=>arr[0].toLowerCase().includes(x));

}
console.log(mutation(["hello", "lehlo"]));

// some

const numbers = [3, -5, -6, 6, -6, 0]
console.log(numbers.some(number=> number > 0))

let indexOfUser = -1;
const userFound = users.some((user, index)=>{
  let isFound = user.name === 'John';
  if(isFound){
    indexOfUser = index;
  }
  return isFound;
})
console.log(indexOfUser, userFound)

// reduce

const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number; 
});
console.log(sum); 

const doublesSum = numbers.reduce(function (accumulator, number) {
  return accumulator + number * 2;
}, 10);
console.log(doublesSum);

const coordinates = [
  { x: 1, y: 2 }, 
  { x: 2, y: 3 }, 
  { x: 3, y: 4 }
];
const sum = coordinates.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, 0);
console.log(sum); 

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); 

