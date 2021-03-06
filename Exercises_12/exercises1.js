/**
 * H8_P0_W4_E12
 * Toko X
 */

function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    var arrDisplay = []; // untuk menampung  semua object dari proses pembelian kemudian ditampilkan

    for (var i = 0; i < listBarang.length; i++) {
        var objProfit = { // obj profit untuk menampung customer yang melakukan pembelian 
            product: listBarang[i][0],
            'name customers': [], //customers name
            leftOver: listBarang[i][2],
            totatProfit: 0
        };
        
        for (var j = 0; j < shoppers.length; j++) {
            var objCostumers = { // obj costumer di dapat dari nilai object di parameter function shopper
                product: shoppers[j].product,
                name: shoppers[j].name, //customers na
                amount: shoppers[j].amount,
            }
            // kondisi jika costumer ingin membeli produk
            if (objProfit.product === objCostumers.product) { // produk di customer(parameter) sama dangn di produk function 
                if (objProfit.leftOver >= objCostumers.amount) {

                    objProfit.product = objCostumers.product;
                    objProfit['name customers'].push(objCostumers.name);
                    objProfit.leftOver -= objCostumers.amount;
                    objProfit.totatProfit += objCostumers.amount *  listBarang[i][1];
                }
            }
        }
        arrDisplay.push(objProfit)
        
    }
    return arrDisplay;
}


// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log('\n');
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log('\n');
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log('\n');
console.log(countProfit([])); //[]
