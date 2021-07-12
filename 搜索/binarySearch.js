// 二分查找 默认数组必须是排好序的

Array.prototype.binarySearch = function(item) {
    let max = this.length;
    let min = 0;
    while(min < max) {
        let mid = Math.floor((min + max) / 2);
        if (item === arr[mid]) {
            return mid
        } else if (item < arr[mid]) {
            max = mid - 1
        } else if (item > arr[mid]) {
            min = mid + 1
        }
    }
    return -1
}

let arr = [1, 2, 3, 4, 5]

console.log(arr.binarySearch(5));