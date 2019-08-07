// Bai1: Mat khau
// let password = prompt("Nhap mat khau: ");

// while(password.length < 8){
//     password = prompt("Mat khau qua ngan, moi nhap lai: ");
// }

// let coDauPhanTram = password.includes("%");
// let coDauDollar = password.includes("$");
// let coDauGachDuoi = password.includes("_");

// while(coDauPhanTram == false){
//     password = prompt("Mat khau phai co dau %, moi nhap lai: ");
//     coDauPhanTram = password.includes("%");
// }
// while(coDauDollar == false){
//     password = prompt("Mat khau phai co dau $, moi nhap lai: ");
//     coDauDollar = password.includes("$");
// }
// while(coDauGachDuoi == false){
//     password = prompt("Mat khau phai co dau _, moi nhap lai: ");
//     coDauGachDuoi = password.includes("_");
// }

// Ve hinh chu nhat bang dau *

// let a = Number(prompt("Nhap so a: "));
// let b = Number(prompt("Nhap so b: "));

// let row = "";
// for(let index = 0;index < a;index++){//Lap a lan de tao 1 row a *
//     row = row + "*";
// }

// let hinhChuNhat = ""
// for(let index = 0;index < b;index++){//Lap b lan de in b row a *
//     hinhChuNhat += row + "\n";
// }
// console.log(hinhChuNhat);

// Hinh tam giac

let a = Number(prompt("Nhap so a: "));

let row = "";
for (let index = 0; index < a; index++) {
    row += "*";
    console.log(row);
}
for (let index = 0; index < a - 1; index++) {
    row = row.slice(0, row.length - 1);
    console.log(row);
}