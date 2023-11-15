// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

// for (let i = 0; i < array.length; i++) {
//     for (let x = 0; x < array.length; x++) {
//         if (array[i] + array[x] === 0) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }
//     }
// }
let value = false

function addToZero(array) {
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        return true;
      } 
    }
  }
}
}

// console.log(value)
// console.log(addToZero(array))
value = addToZero(array)
console.log(value)