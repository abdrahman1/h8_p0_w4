/**
 * H8_P0_W4_E5
 * Ubah Huruf
 * 
 */

function ubahHuruf(kata) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var kataBaru = '';
    for (var i=0; i < kata.length; i++) {
        var isAbjad = false;
        for (var j = 0; j < abjad.length; j++) {
            if (kata[i] === abjad[abjad.length - 1]) {
                isAbjad = false;
                break;
            }
            else if (kata[i] === abjad[j]) {
                isAbjad = true;
                break;
            }
        }
        if (isAbjad) {
            kataBaru += abjad[j+1];
        } else {
            kataBaru += abjad[abjad.length-abjad.length]
        }
    }
    return kataBaru;
}
 // TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zebra')); // tfnbohbu

