/**
 * H8_P0_W4_E11
 * Change Me!
 */

function changeMe(arr) {
    var obj = {};
    var header = '';
    for (var i = 0; i < arr.length; i++) {
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2];
        if (arr[i][3] >= 2018 || arr[i][3] !== undefined) {
            obj.age = 2018 - arr[i][3]
        } else {
            obj.age = 'Invalid Number';
        }
        header = i+1+'. '+obj.firstName+' '+obj.lastName+' '
        console.log(header);
        console.log(obj);
    }
;}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""