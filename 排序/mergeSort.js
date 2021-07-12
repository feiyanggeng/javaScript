Array.prototype.mergeSort = function() {
    let rec = (arr) => {
        if (arr.length === 1) {return arr}
        let start = Math.floor(arr.length / 2);
        let leftArr = rec(arr.slice(0, start));
        let rightArr = rec(arr.slice(start));
        let res = []
        while(leftArr.length || rightArr.length) {
            if (leftArr.length && rightArr.length) {
                if (leftArr[0] < rightArr[0]) {
                    res.push(leftArr.shift())
                } else {
                    res.push(rightArr.shift())
                }
            } else if (leftArr.length) {
                res.push(leftArr.shift())
            } else if (rightArr.length) {
                res.push(rightArr.shift())
            }
        }
        return res;
    }
    const newArr = rec(this);
    newArr.forEach((n, i) => {this[i] = n})
}

let arr = [3, 1, 2, 5, 4]

arr.mergeSort();