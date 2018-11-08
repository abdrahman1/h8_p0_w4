/*
  --------------
  DIGITS GROUPER
  --------------
  PROBLEM
  =======
  digitsGrouper adalah sebuah function yang menerima array of number 1 dimensi.
  Function akan membentuk array dua dimensi dimana dimensi pertama akan mengelompokkan angka-angka di array tadi sesuai jumlah digit nya.
  Group akan berurut. posisi pertama untuk angka 1 digit, posisi kedua untuk angka 2 digit, dan seterusnya, hingga maksimal untuk angka 4 digit.
  Contoh:
  array of numbers: [1, 12, 1234, 13, 0, 88, 123, 456]
  proses:
  satu digit -> 1, 0
  dua digit -> 12, 13, 88
  tiga digit -> 123, 456
  empat digit -> 1234
  output:
  [
    [1, 0],
    [12, 13, 88],
    [123, 456],
    [1234],
  ]
  
  RULES
  =====
  Dilarang menggunakan method map, filter, dan reduce.
*/

function digitsGrouper(numbers) {
  var satuan = [];
  var puluhan = [];
  var ribuan = [];
  var ratusan = [];
  var ribuan = [];
  var hasil = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0 && numbers[i] <= 9) {
      satuan.push(numbers[i]);
    } else if (numbers[i] >= 10 && numbers[i] <= 99) {
      puluhan.push(numbers[i]);
    } else if (numbers[i] >= 100 && numbers[i] <= 999) {
      ratusan.push(numbers[i]);
    } else if (numbers[i] >= 1000 && numbers[i] <= 9999) {
      ribuan.push(numbers[i]);
    }
  }
  
  hasil.push(satuan, puluhan, ratusan, ribuan);
  return hasil;
  // only code here..
}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]
