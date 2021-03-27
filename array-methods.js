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
console.log(numbers.every(number=> number >0))

function mutation(arr) {
  return arr[1].toLowerCase().split("").
        every(x=>arr[0].toLowerCase().includes(x));

}
console.log(mutation(["hello", "lehlo"]));

// some

const numbers = [3, -5, -6, 6, -6, 0]
console.log(numbers.some(number=> number >0))
