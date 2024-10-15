// Implementați o funcție care primește 
// ca parametrii un array de numere 
// și un număr și returnează
// suma tuturor numerelor din array 
// divizibile cu cel de-al doilea parametru.

const arr = [1,2,5,6,12,14];

const sumDivisibleBy = (arr, divizor) => {
    return arr.filter(num => num % divizor === 0).reduce((acc, el) => acc + el, 0);
}

console.log(sumDivisibleBy(arr, 2));
console.log(sumDivisibleBy(arr, 3));