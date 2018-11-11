function changeMe(arr) {
    var obj={}
    var header=''

    for(var i=0; i<arr.length; i++){
        console.log('=>arr[i], i ke: '+i)
        obj.firstname=arr[i][0]
        console.log('====>firstname: '+obj.firstname);
        obj.lastName=arr[i][1]
        console.log('====>lastname: '+obj.lastName);
        obj.gender=arr[i][2]
        console.log('====>gender: '+obj.gender)

        if(arr[i][3]<=2018 ||arr[i][3]!==undefined){

            obj.age=2018-arr[i][3]

        }   else{

            obj.age='Invalid Birth Year'

        }
        console.log('====>age: '+obj.age)

        header=i+1 + '. ' + arr[i][0]+ ' '+ arr[i][1]+ ':  '
        console.log(header)
        console.log(obj)
        
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
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