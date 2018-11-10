/**
 * H8_P0_W4_E7
 * Mengurutkan Abjad
 */

function urutkanAbjad(str) {
    var array = str.split('')
    var cek = true;
    var tempUrut;
    while(cek == true) {
        cek = false;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                cek = true;
                tempUrut = array[i];
                array[i] = array[i+1];
                array[i+1] = tempUrut;
            }
        }
    }
    return array.join('');
}

/**
 * 1. buat var 'array' untuk menampung str yang di split jadi array;
 * 2. buat var 'cek' dengan aturan nilai true
 * 3. buat var 'tempUrut' untuk tampungan sementara array yang ditukar;
 * 4. buat perulangan WHILE dengan kondisi cek true. apabila kondisi cek false maka ke no. 12
 * 5.   atur ulang nila 'cek' dengan false untuk keluar dari perulangan while
 * 6.   buat perulangan FOR dengan var 'i' adalah 0  dan selama 'i' tidak lebih dari panjang 'array' lakukan counter 'i' sebesar 1. jika tidak ke no. 4
 * 7.   buat kondisi IF jika indek ke 'i' dari 'array' lebih besar dari indek ke 'i+1' dari 'array', jika kondisi salah ke no. 6.
 * 8.       atur nilai 'cek' dengan true;
 * 9.       atur nilai 'tempUrut' dengan `indek ke i dari 'array'`;
 * 10.      atur nilai `indeks ke i dari array` sama dengan `indeks ke i+1 dari 'array'`
 * 11.      atur nilai `indeks  ke i+1 dari 'array'` sama dengan 'tempUrut', dengan begitu nilai dari 'index i' dan 'index i+1' dari 'array' tersebut tertukar.
 * 12. Atur RETURN untuk array, yang sebelumnya telah dilakukan perubahan melalui 'tempUrut'. array di atur dengan method join dengan parameter '' agar array menjadi string.
 */



// TEST CASES
// console.log(urutkanAbjad(['h','e','l','l','o'])); // 'ehllo'
console.log(urutkanAbjad('hello'))
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
