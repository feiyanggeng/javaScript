Number.prototype.add = function (num) {
  let a = this + num;
  return {
    minus: (n) => {
      return a - n;
    },
    value: a
  }
}

let five = 5

let add = five.add(3)

console.log(add.minus(1));
console.log(add.minus(2));
console.log(add.minus(3));
console.log(add.minus(4));