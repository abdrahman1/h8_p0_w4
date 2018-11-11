/**
 * H8_P0_W4_E11
 * Shopping Time!
 */

function shoppingTime(memberId, money) {
    // you can only write your code here!
    var saleProduct = [
        ['Sepatu Stacattu', 1500000],
        ['Bazu Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000],
    ]
    var cash = money;
    var productPurchased = []
    for (var i = 0; i < saleProduct.length; i++) {
        if (cash >= saleProduct[i][1]) {
            productPurchased.push(saleProduct[i][0]);
            cash = cash - saleProduct[i][1]
        }
        var objDisplay = {
            memberId: memberId,
            money: money,
            listPurchased: productPurchased,
            changeMoney: cash
        }
        // console.log('====>ListPurchased: '+objDisplay.listPurchased);
        // console.log('====>ChangeMoney: '+cash);

    }
    if (memberId === undefined || memberId == '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    } else {
        return objDisplay;
    }
}

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
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja