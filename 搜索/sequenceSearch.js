Array.prototype.sequenceSearch = function(item) {
    for (let i = 1; i < this.length; i+=1) {
        if(this[i] === item) {
            return i
        }
    }
    return -1
}

let arr = [3, 1, 2, 5, 4]

console.log(arr.sequenceSearch(5));