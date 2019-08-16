// let array1 = [1,2,3,4,5,6];

//console.log(array1);

// for (let index = 0; index < array1.length; index++) {
//     console.log(array1[index]);
// }

// console.log(array1[8]);

// let person = ["Pham Van A", "Ha Noi", 19, ["HTML", "C", "Javascript"]];
// for (let index = 0; index < person.length; index++) {
//     console.log(person[index]);
// }

//console.log(person[2]);
// person[2] += 1;
// console.log(person[2]);

// console.log(person);
// for (let index = 0; index < person.length; index++) {
//     console.log(person[index]);
// }
// console.log("=================");
// let old_length = person.length;
// let new_length = person.push("DH Quoc gia HN", "DH Quoc gia HN 2");
// // console.log(person);
// console.log("Gia tri cu: "+ old_length);
// console.log("Gia tri moi: "+ new_length);
// console.log("=================");
// for (let index = 0; index < person.length; index++) {
//     console.log(person[index]);
// }
// console.log("=================");
// let new_new_length = person.unshift("Nguyen Van B", "Do Thi C");//length = 8
// for (let index = 0; index < person.length; index++) {
//     console.log(person[index]);
// }
// console.log(new_new_length);
// console.log("=================");
// person[10] = "abc123";
// for (let index = 0; index < person.length; index++) {
//     console.log(person[index]);
// }
//person[person.length] = "123abc";

// let N = Number(prompt("Nhap N: "));
// let canhDaGiac = [];
// for (let index = 0; index < N; index++) {
//     let doDai = Number(prompt("Nhap do dai canh: "));
//     canhDaGiac.push(doDai);
// }
// console.log(canhDaGiac);

// let sum = 0;

// for (let index = 0; index < canhDaGiac.length; index++) {
//     let doDaiCanh = canhDaGiac[index];
//     sum = sum + doDaiCanh;
// }
// console.log("Chu vi: "+sum);

// let array2 = [2,3,4,5,6]; // 5 phan tu

// //delete array2[3];

// array2.pop(); // nguoc lai cua push
// array2.shift(); // nguoc lai cua unshift

// console.log(array2);

let arr = [5, 2, 4, 3, 1];

for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] >= arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}
console.log(arr);







