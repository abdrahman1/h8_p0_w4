function cariMedian(arr) {
    var midCeil = Math.ceil((arr.length)/2)-1;
    var midFloor = Math.floor((arr.length+1)/2)-1;
    var median = (arr[midCeil]+arr[midFloor])/2;
    // console.log(arr[midCeil]+arr[midFloor]);
    return median
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

