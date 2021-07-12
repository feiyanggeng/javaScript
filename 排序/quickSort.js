Array.prototype.quickSort = function() {
    let rec = (arr) => {
        if (arr.length <= 1) return arr;
        let stand = arr[0];
        let leftArr = [], rightArr = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < stand) {
                leftArr.push(arr[i])
            } else {
                rightArr.push(arr[i])
            }
        }
        return [...rec(leftArr), stand, ...rec(rightArr)]
    }
    const newArr = rec(this);
    newArr.forEach((n, i) => {this[i] = n})
}

let arr = [3, 1, 2, 5, 4]

arr.quickSort();

console.log(arr);