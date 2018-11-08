function asteriks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        var isi = '';
        for (var j = 0; j <= i; j++) {
            isi += '*';
        }
        arr.push(isi);
    }
    return arr;
}
console.log(asteriks(3));
console.log(asteriks(5));
console.log('\n');

function asteriks2D(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        var isi = [];
        for (var j = 0; j <= i; j++) {
            isi.push("*");
        }
        arr.push(isi);
    }
    return arr
}

console.log(asteriks2D(3));
console.log(asteriks2D(5));