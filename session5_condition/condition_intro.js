
// let number = Number(prompt("Nhap vao mot so: "));

// if(number >= 5){
//     console.log(`So ${number} khong nho hon 5`);
// }

// let a = Number(prompt("Nhap so a: "));
// let b = Number(prompt("Nhap so b: "));

// if(a > b){
//     console.log(`So ${a} lon hon so ${b}`);
// }
// else if(a < b){
//     console.log(`So ${a} nho hon so ${b}`);
// }
// else{
//     console.log("Hai so bang nhau");
// }

// let month = Number(prompt("Nhap thang: "));

// if(1 <= month && month <= 3){
//     console.log("Mua xuan");
// }
// else if(month <= 6){
//     console.log("Mua ha");
// }
// else if(month <= 9){
//     console.log("Mua thu");
// }
// else if(month <= 12){
//     console.log("Mua dong");
// }
// else{
//     console.log("Nhap sai thang");
// }

// let a = Number(prompt("Nhap a: "));
// let b = Number(prompt("Nhap b: "));

// if(a == 0){
//     if(b == 0){
//         console.log("Phuong trinh vo so nghiem");
//     }
//     else{
//         console.log("Phuong trinh vo nghiem");
//     }
// }   
// else{
//     let x = -b/a;
//     console.log("Phuong trinh co nghiem duy nhat la: " + x);
// }

// Nhap vao 1 thang, in ra so ngay trong thang do

let month = Number(prompt("Nhap vao thang trong nam: "));

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Co 31 ngay");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Co 30 ngay");
        break;
    case 2:
        let year = Number(prompt("Nhap nam: "));
        let du = year % 4;
        switch(du){
            
        }
        break;
    default:
        console.log("Nhap sai thang roi");
}

