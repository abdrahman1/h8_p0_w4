/**
 * H8_P0_W4_E15
 * Makan Terus (Rekursif)
 */

function makanTerusRekursif(waktu) {
    hasil = 0;
    if (waktu <= 0) {
        return 0
    } else {
        // console.log(==>makanTerusRekursif(waktu-15));
        // console.log('----')
        return 1 + makanTerusRekursif(waktu - 15);
    }
    
}
// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
