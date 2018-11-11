function kaliTerusRekursif(angka) {
    angkaString = angka.toString()
    hasilKali = 1
    if (angkaString.length === 0){
        return 1
    }
    else {
        for ( var i = 0; i <angkaString.length; i++){
            hasilKali = hasilKali * Number(angkaString[i])
        }
        if(hasilKali.toString().length > 1){
            return kaliTerusRekursif(hasilKali)
        } else {
            return hasilKali
        }
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6