String.prototype.countCoincidence = function (arrElement) {
  let position = -1;
  let count = 0;
  while ((position = this.indexOf(arrElement, position + 1)) != -1) {
    count++;
  }
  return count;
};

"Hello world".countCoincidence("Hello"); // must return 1

"Hello world".countCoincidence("aaa"); // must return 0

"Hello world".countCoincidence("o"); // must return 2
