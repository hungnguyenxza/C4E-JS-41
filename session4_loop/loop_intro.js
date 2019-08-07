// let N = Number(prompt("Nhap N: "));

// let tong = 0;

// for(let index = 0;index < N + 1;index++){
//     tong = tong + index;
// }

// console.log(tong);

// let N = Number(prompt("Nhap N: "));
// let S = 0;

// for(let index = 1;index<N+1;index++){
//     S = S + 1/index;
// }
// console.log(S);

// let N = Number(prompt("Nhap N: "));
// let S = 0;

// for(let index = 1;index<N+1;index++){
//     S = S + 1/(index * (index + 1));
// }
// console.log(S);

// let N = Number(prompt("Nhap so canh da giac: "));
// let P = 0;

// for(let index = 0;index < N;index++){
//     let do_dai = Number(prompt("Do dai canh thu " + (index + 1) + " la: "));
//     P += do_dai;
// }
// console.log("Chu vi da giac " + N + " canh la: " + P);

// let index = 0;
// while (index < 3) {
//     console.log(index++);
// }

let password = prompt("Moi nhap mat khau: ");

while (password.length < 8) {
    password = prompt("Mat khau cua ban qua ngan, moi nhap lai: ");
}

console.log(password);
