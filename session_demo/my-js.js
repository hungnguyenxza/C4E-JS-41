
// function add(...q){
//     let result = q.reduce(function(a,b,c,d){
//         return a + b;
//     }, 0);

//     console.log(result);
// }

// var number = [1,2,3,4,5,6];

// // add(...number);

// let arry = ["hello", 1, add, 3,4,5, {name: "123"}];

// // arry[2](...number);
// console.dir(arry.sort());

// let array1 = new Array(40);
// console.log(Math.min(...number));

// let max = -Infinity;
// console.log(max + Infinity);

let so = [9,94,234,51,43,546,76,5243,132,123];

function timMin(array){
    if(array.length == 1) return array[0];

    let minNumber = array[0] < array[1] ? array[0] : array[1];

    array.splice(0,2);
    array.unshift(minNumber);
    
    return timMin(array);
}
console.log(timMin(so));