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
