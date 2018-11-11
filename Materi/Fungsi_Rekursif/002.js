/**
 * JavaScript Recursive Function
 */

// Review Function
var printPrint = function() { // without parameter
    console.log("Print")
};
printPrint() // call it

var printStarred = function(text) { // with parameter
    console.log("*** " + text + " ***")
};
printStarred("Super Star");

function printCircle(text) { // shorthand to create function 
    console.log("ooo " + text + " ooo");
}
printCircle("Circling Circle");

function addition(number) {
    var hasil = 0;
    for (var i = 0; i < number.length; i++) {
        hasil += number[i];
    }
    return printStarred(hasil);
}

addition([10, 6, 4])

// fungsi rekursi
function numberSum(num) {
    if (num === 1) {
        return 1;
    } else {
        return num + numberSum(num - 1);
    }
}
console.log(numberSum(5))

// function power(base, exponent) {
//     var hasil = 1;
//     for (var i = 0; i < exponent; i++) {
//         hasil *= base
//     }
//     return printStarred(hasil);
// }
// power(3, 3);

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent-1);
    }
}
console.log(power(3, 3))