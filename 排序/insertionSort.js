Array.prototype.insertionSort = function() {
    for (let i = 1; i < this.length; i+=1) {
        let temp = this[i], j = i;
        while(j > 0) {
            if (temp > this[j - 1]) {
                break;
            } else {
                this[j] = this[j - 1]
                j -= 1;
            }
        }
        this[j] = temp
    }
}

let arr = [3, 1, 2, 5, 4]

arr.insertionSort();