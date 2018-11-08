function manualUnshift(data, add) {
    for (var i = data.length - 1; i >=0; i--) {
        console.log(data[i+1]+' ==== ' +data[i] )
        data[i+1] = data[i];

    }
    return data;
}

console.log(manualUnshift([2,3,4,5,6], 1))

// function manualShift(data) {
//     newData = []
//     for (var i = 0; i < data.length; i++) {
//         data[i-1] = data[i];
//         newData[i] = data[i]; 
//     }
//     return newData;
// }
// console.log(manualShift([1, 2, 3, 4, 5]))