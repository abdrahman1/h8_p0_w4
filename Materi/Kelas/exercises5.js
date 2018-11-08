function cariVocal(char) {
    var hasil = [];
    var vocal = 'aioeu';
    for (var i = 0; i < char.length; i++) {
        
        for (var j = 0; j < vocal.length; j++) {
            if (char[i] === vocal[j]) {
                hasil++
            }
        }
    }
    return hasil; 
}

console.log(cariVocal(['a','i','b','c','a']));
console.log(cariVocal('k','c','v','a'));