String.prototype.countCoincidence = function (arrElement) {
  let position = -1;
  let count = 0;
  while ((position = this.indexOf(arrElement, position + 1)) != -1) {
    count++;
  }
  console.log(count);
};

"Hello world".countCoincidence("Hello"); // must return 1

"Hello world".countCoincidence("aaa"); // must return 0

"Hello world".countCoincidence("o"); // must return 2

// let str = "Hello world";
// let target = "Hello";
// let count = 0;
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   count++;
// }
// console.log("Score: " + count);
