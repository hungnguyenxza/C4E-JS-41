
// function sayHello(){
//     console.log("Hello, world!");
// }

// // sayHello();

// // for (let index = 0; index < 5; index++) {
// //     sayHello();
// // }

// let myName = function(){
//     console.log("My name is Hung");
// }

// // myName();

// // console.log(typeof(myName));
// // console.log(typeof(sayHello));


// function chanLe(a){
//     if(a % 2 == 0){
//         console.log("Số chẵn");
//     } else {
//         console.log("Số lẻ");
//     }
// }

// //let number = Number(prompt("Nhập số N: "));
// //chanLe(number);

// function tinhTong(a, b){
//     let sum = a + b;
//     console.log(a);
//     console.log(b);
//     console.log("Tổng của 2 số là: " + sum);
// }

// let x = 10;
// let y = 20;
// //tinhTong(x, y);
// //tinhTong(y, x);
// //tinhTong(10, 20);



// function tinhTongCuaMang(array){
//     console.log(array);

//     let sum = 0;
//     for (const value of array) {
//         sum += value;
//     }
//     console.log("Sum = " + sum);
// }

// // let arr = [1, 2, 3, 4, 5, 9];
// // tinhTongCuaMang(arr);

// let m = 20;
// //tinhTongCuaMang(m);
// //tinhTong(m);

// function tinhTong4(a, b, c, d){
//     let sum = a + b + c + d;
//     console.log("a:" + a);
//     console.log("b:" + b);
//     console.log("c:" + c);
//     console.log("d:" + d);
//     console.log("Tong: " + sum);
// }

// let n = 30;
// tinhTong4(m, n);

// let person = {
//     'name': 'A',
//     'age': 20
// }

// //In danh sach sinh vien
// function inDanhSachSV(dSSinhVien){
//     for (let index = 0; index < dSSinhVien.length; index++) {
//         const sinhVien = dSSinhVien[index];
//         inSinhVien(sinhVien);
//     }
// }
// function inSinhVien(sinhVien){
//     for (const key in sinhVien) {
//         if (sinhVien.hasOwnProperty(key)) {
//             const value = sinhVien[key];
//             print(key + ": " + value);
//         }
//     }
// }
// function print(message){
//     alert(message);
// }

// inSinhVien(person);


// let thuVien = [
//     {
//         'name': 'Sách 1',
//         'amount': 10,
//     },
//     {
//         'name': 'Sách 2',
//         'amount': 20,
//     }
// ];

// let arr = [5,7,4,2,1,3,2,6];
// for (let i = 0; i < arr.length; i++) {
//     for (let index = 0; index < arr.length - 1; index++) {
//         if(arr[index] >= arr[index + 1]){
//             let temp = arr[index];
//             arr[index] = arr[index + 1];
//             arr[index + 1] = temp;
//         }
//     }
// }

// console.log(arr);

//================ Return function ==================

// function tinhTong(a, b){
//     return a + b;
// }

// function tinhTong2(a, b){
//     let sum = a + b;
// }

// // let sum = tinhTong(5, 10);
// // console.log(sum);

// function kiemTraSoNguyenTo(n){
//     //là số nguyên tố: return true;
//     //ngược lại thì: return false;
//     //Điểm số ước của n
//     let count = 0;
//     for (let index = 1; index <= n; index++) {
//         if(n % index == 0){
//             count++;
//         }
//         if(count > 2){
//             return false; // không phải số nguyên tố
//         }
//     }
//     return true;
// }

// let N = 2;
// let ketQua = kiemTraSoNguyenTo(N);
// if(ketQua == true){
//     console.log(N + " là số nguyên tố");
// } else {
//     console.log(N + " không là số nguyên tố");
// }

// function danhSachUocSo(n){
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         if(n % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// let N = 100;
// let uocSo = danhSachUocSo(N);
// console.log("Danh sach ước số của " + N + " là:\n" + uocSo.toString());

// let x = 10;
// let person = {
//     'age': 10
// }
// function nhanDoi(a){
//     a = a * 2;
// }
// console.log("Ban đầu: " + person.age);
// x = nhanDoi(person.age);
// console.log("Sau khi nhân: " + person.age);
// console.log("====================");
// function nhanDoi2(person){
//     person.age *= 2;
// }
// console.log("Ban đầu: ")
// console.log(person);
// nhanDoi2(person);
// console.log("Kết quả: ");
// console.log(person);

let arr = [1,2,3,4,5,6];// biến toàn cục
function nhanDoi3(){
    // index : biến cục bộ
    var index;
    for (index = 0; index < arr.length; index++) {
        arr[index] *= 2;        
    }
}
nhanDoi3(arr);
console.log(arr);
console.log(index);

