// //How to find a large number from inside an array
// let marks = [50, 70, 88, 23, 98, 36, 45, 78, 82];
// let max = marks[0];
// for (let i = 0; i < marks.length; i++) {
//   let element = marks[i];
//   if (element > max) {
//     max = element;
//   }
// }
// console.log(max);
// //expected output: 98

let arr = [1, 2, 3, 4, 6, 20, 7];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  let ele = arr[i];
  if (ele > max) {
    max = ele;
  }
}

console.log(max);
