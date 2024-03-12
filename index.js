// const myNums = [2, 5, 67, 13, 4]

// const addNums = (num1, num2) => {
//   return num1 + num2;
// }

// const subtractNums = (num1, num2) => {
//   return num1 - num2;
// }

// const getTotal = (array, func) => {
//   let total = 0;

//   for(let i = 0; i < array.length; i++) {
//     total = func(total, array[i]);
//   }

//   return total;
// }


// console.log(getTotal(myNums, addNums));


// const myFind = (array, func) => {
//   for(let i = 0; i < array.length; i++) {
//     if(func(array[i])) {
//       return array[i];
//     }
//   }
// } 



// const names = [`Bobby`, `Billy`, `Sally`];

// Find

// const firstLetterF = (strName) => {
//   return strName[0] === `F`;
// }

// console.log(names.find(firstLetterF));

// console.log(myFind(names, firstLetterF));



// const users = [
//   {
//     username: `blake450`,
//     password: `coolcool`
//   },
//   {
//     username: `samwise22`,
//     password: `frodo_is_awesome!`
//   }
// ] 

// forEach

// const logUsername = (user) => {
//   console.log(user.username);
// }

// users.forEach(logUsername);

// const logItem = (item) => {
//   console.log(item);
// }

// names.forEach(logItem);

// for(let i = 0; i < array.length; i++) {
//   func(array[i]);
// }

// const favNums = [32, 76, 89, 12, -56, 1000, 54]

// filter

// const isGreaterThan54 = (num) => {
//   return num > 54;
// }

// const filteredNums = favNums.filter(isGreaterThan54);


// const names = [
//   {
//     name: `Freddy`,
//     age: 32
//   },
//   {
//     name: `Barbara`,
//     age: 54
//   },
//   {
//     name: `Joe`,
//     age: 12
//   }
// ];

// const names = [`Bobby`, `Billy`, `Sally`];

// map

// const add5 = (num) => {
//   return num + 5;
// }

// const turnNameIntoLI = (person) => {
//   return `<li>${person.name} is ${person.age} years old</li>`
// }

// console.log(favNums.map(add5));

// console.log(names.map(turnNameIntoLI));



// reduce

// const luckyNumbers = [22, 34, 12, 7, 90];

// const sum = (currentTotal, newNumber) => {
//   return currentTotal + newNumber;
// }

// console.log(luckyNumbers.reduce(sum, 0));


// const names = [`Gary`, `Wendell`, `Lucy`, `Melanie`];

// const addNameToString = (currentString, name, currentIndex, array) => {
//   if(currentIndex === 0) {
//     return `${currentString} ${name}`
//   } else if (currentIndex === array.length - 1) {
//     return `${currentString}, and ${name}`
//   }

//   return `${currentString}, ${name}`
// }

// console.log(names.reduce(addNameToString, `My friends are`));



// indexOf
// const ourNums = [43, 54, 21, 2, 900];
// const newNames = [`Riley`, `Betty`, `Larry`]

// console.log(newNames.indexOf(`Warren`));




// anonymous functions

const addNums = (num1, num2) => {
  return num1 + num2;
}

// (num1, num2) => {
//   return num1 + num2;
// }

const names = [`Paulie`, `Lisa`, `Jordan`];

const isAwesomeList = names.map((currentName) => {
  return `${currentName} is awesome!`
});

