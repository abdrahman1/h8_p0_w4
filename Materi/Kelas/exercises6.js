function cariKonstanta(array) {
    var hasil = 0;
    var vocal = 'aiueo';
    for (var i = 0; i < array.length; i++) {
        var isKonstanta = true;
        for (var j = 0; j < vocal.length; j++) {
            if (array[i] === vocal[j]) {
                isKonstanta = false;
            }
        }
        if (isKonstanta) {
            hasil++
        }
    }
    return hasil;
}

console.log(cariKonstanta(['l','t','e','r']));
console.log(cariKonstanta(['k','c','j','o','l','a']))