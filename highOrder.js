// // write your own find and findIndex function
// // (Hint: using for loop and if else)
// //1. find function: The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// //steps :
// // 1.take some array
// // 2.create the function to return the first element as per the Condition
// // let the condition be we have to return the first element which is greater than 4.
// // 3.if the condition element not found return undefined
// // -----------------------------
// // 2.find Index method: The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// // steps:
// // 1.take the array
// // 2.write the function to return the index of first element as per the conditon. here the conditon is same as above


const arr = [1,2,3,4,5];
function findElement(arr){
    //array is empty or not
    if(arr.length === 0) console.log("Array is Empyt");
    //checking each element in array with condition element > 4
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 4) {
            return arr[i];
        }
// //         //i am not getting how to return undefine if i write else return it is alway showing undefined
    }
}
const result = findElement(arr);
console.log(result);

function findIndexArr(arr){
    //array is empty or not
         if(arr.length === 0) {
            console.log("Array is Empyt");
         }
         for(let i = 0; i < arr.length; i++){
            if(arr[i] > 4) {
                return i;
            }
            
        }         
}
const result1 = findIndexArr(arr);
console.log(result1);

// // // ======================================================== //



// /**
//  * requirement one
//  * increment each number by one and output the resultant array using a higher order method and for loop
//  * HINT: use nesting
//  * solution =  [[15,22,24,65], [34,47,52,66]]
//  * 
//  * 
//  * requirement two
//  * from the above array, create an array of array of even numbers using a higher order method and for loop
//  * solution = [[14,64], [46]]
//  */
 const solution1 = [[14,21,23,64], [33,46,51,65]];

function incrementByOne(arr){
    const newArr = [];
    for(let row = 0; row < solution1.length; row++){
        for(let col = 0; col < solution1[row].length; col++){
            newArr.push(solution1[row][col]);
        }

    }
    return newArr.map(item => item + 1);
}
// console.log(newArr);

console.log(incrementByOne(solution1));

function evenNo(arr){
        const newArr = [];
        for(let row = 0; row < solution1.length; row++){
            for(let col = 0; col < solution1[row].length; col++){
                newArr.push(solution1[row][col]);
            }
    
        }
        return newArr.filter(item => item % 2 === 0);
    }
    console.log(evenNo(solution1));
// // ======================================================== //

    const array = [23 , 45, 467, 789, 34, 989, 56]

//     // problem => return an array such that numbers at odd idex are multiplied by 2
//     // and numbers at even index are multiplied by 10
   
    const newArray = [];
    for(let i = 0 ; i < array.length; i++){
      if(i % 2 !== 0){
        newArray.push(array[i] * 2);
      } else newArray.push(array[i] * 10);
    }

    console.log(newArray);
// // ======================================================== //




 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModels = ["city", "innova", "alto", "nano"]
 
// const carObject = {}
// //  using a higher order method, create a carObject variable such that 
// /**
//  * 
//  * {
//  * honda:city,
//  * toyota:innova,
//  * maruti:alto,
//  * tata:nano
//  * }
//  */
carBrands.forEach((carBrand, carModel) => { 
  carObject[carBrand] = carModels[carModel]
});
console.log(carObject);
 
 
// // ======================================================== //


//  /**
//   *  Flattening
//  Use the reduce method 
//  to â€œflattenâ€ an array of arrays into a single array that has all the elements of the original arrays.
 
// const arrays = [[1, 2, 3], [4, 5], [6]];
//  // result =  [1, 2, 3, 4, 5, 6]
//   * 
//   * 
//   */
//  // here we are using reduce method -> in this the previousValue is an accumulator which is initialised with empty array and we get the value form original array in currentValue and add the currentValue to accumulator that is empty array to get the final single array 

 const arrays = [[1, 2, 3], [4, 5], [6]];
 const flattened = arrays.reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  [],
)
console.log(flattened);
// // ======================================================== //


//  /**
//   * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
//   * return an array with all words converted into uppercase using higher order function
//   * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
//   * 
//   * 
//   * 
//   */
//   const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  function upper(array){
    const uppercase = countries.map(
      items => items.toUpperCase()
    );
    return uppercase;
  }
  const result2 = upper(countries);
  console.log(result2);

// // ======================================================== //




