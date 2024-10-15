const arr = [123, 54, 23, 564];

const filteredArray = arr.filter((element) => {
    return element % 2 === 0;
});

// console.log(filteredArray);

// const arr2 = undefined;
// console.log(arr2.filter((element) => {
//     return element % 2 === 0;
// }));

const newForEachArr = arr.forEach(el => {
    return el;
});

const newMapArr = arr.map((el) => {
    return el*10;
});

// console.log(newForEachArr);
// console.log(newMapArr);

const sum = arr.reduce((acc, el) => acc + el, 0);

let sum2 = 0;

// arr.forEach(el => {
//     sum2 += el;
// });

console.log(sum);

const foundNumber = arr.find(el => el === 54);
console.log(foundNumber);

