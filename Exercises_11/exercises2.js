function shoppingTime(memberId, money) {

    var product = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]
    var cash = money
    var arrProduct = []


    for (var i = 0; i < product.length; i++) {

        if (cash >= product[i][1]) {
            arrProduct.push(product[i][0])
            cash -= product[i][1]
        }

        var objDisplay = {
            memberId: memberId,
            money: money,
            listPurchased: arrProduct,
            changeMoney: cash
        }
    }

    if (memberId == '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    } else {
        return objDisplay
    }

}

// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja