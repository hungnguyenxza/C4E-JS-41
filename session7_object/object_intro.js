// let person = {
//     "name": "Pham Van A", 
//     age: 19,
//     "country": "HaNoi",
//     //name: "Nguyen Thi B"
// }

// console.log(person);
// console.dir(person);
// console.log(person["age"]);
// console.log(person.country);

// console.log(person["name"]);
// person["name"] = "Nguyen Thi B"; // Update
// console.log(person.name);

// person.age = person.age + 1;

// person["school"]  = "Dai hoc quoc gia"; // Create

// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         const element = person[key];
//         console.log(element);
//     }
// }

// let arr = [10,2,3];

// for (const key in arr) {
//     console.log("FOR IN:",key);
// }

// for (const value of arr) {
//     console.log("FOR OF: ",value);
// }

// console.log(typeof(arr));
// console.log(typeof(person));
// let x = 5;
// let name = "abc";
// console.log(typeof(x));
// console.log(typeof(name));
// //console.log(arr instanceof Array);
// console.log(arr.constructor.toString());
// console.log(arr.constructor.toString().indexOf('Array') >= 0);

let sinhVien = {};

let name = prompt("Nhập tên:");
let age = Number(prompt("Nhập tuổi: "));
let country = prompt("Nhập quê quán: ");
sinhVien["name"] = name;
sinhVien['age'] = age;
sinhVien.country = country;

console.log(sinhVien);

let dachSachMonHoc = [];
for (let index = 0; index < 3; index++) {
    let monHoc = prompt("Nhập môn học:");
    dachSachMonHoc.push(monHoc);
}
sinhVien.subjects = dachSachMonHoc;

// let inputDSMonHoc = prompt("Nhập danh sách môn học, ngăn cách nhau bởi dấu ,");
// sinhVien.subjects = inputDSMonHoc.split(',');

let danhSachKeys = '';
for (const key in sinhVien) {
    if (sinhVien.hasOwnProperty(key)) {
        danhSachKeys += key + '\n';
    }
}
console.log(danhSachKeys);

let inputKey = prompt("Nhập thông tin muốn thay đổi: ");

// while(!sinhVien.hasOwnProperty(inputKey)){
//     inputKey = prompt("Nhập lại thông tin muốn thay đổi: ");
// }

if(sinhVien.hasOwnProperty(inputKey)){
    if(inputKey == 'age'){
        sinhVien[inputKey] = Number(prompt("Nhập nội dung: "));
    }else{
        sinhVien[inputKey] = prompt("Nhập nội dung: ");
    }
}
else{
    alert("Nhập sai thông tin");
}

let lop = {
    'maSo': prompt("Nhập mã số lớp"),
    'tenLop': prompt("Nhập tên lớp:")
}
sinhVien.classInfo = lop;
console.log(sinhVien);

for (let index = 0; index < 2; index++) {
    let monHoc = prompt("Nhập tên môn học:");
    sinhVien.subjects.push(monHoc);
}

delete sinhVien['classInfo'];
delete sinhVien.subjects;
