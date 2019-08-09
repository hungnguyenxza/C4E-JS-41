// Bài tập liên quan đến: CRUD
// C: Create
// R: Read
// U: Update
// D: Delete
let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện\n" +
            "2. Thêm sách\n" + 
            "3. Đổi tên sách\n" + 
            "4. Xóa sách\n" + 
            "5. Thoát";

let message = menu + "\nChọn menu: "
let danhSach = [];
while(true){
    let choose = Number(prompt(message));
    // Khai báo biến isExit đại diện cho việc người dùng muốn out CT,
    // mặc định ban đầu là người dùng chưa muốn out, tức = false
    let isExit = false;
    switch(choose){
        case 1:
            if(danhSach.length == 0){
                console.log("Danh sách trống !");
            }else{
                console.log("Danh Sách: ");
                for (let index = 0; index < danhSach.length; index++) {
                    const book = danhSach[index];
                    console.log(`${index + 1}: ${book}`);
                }
            }
            break;
        case 2:
            let tenSach = prompt("Nhap ten sach: ");
            danhSach.push(tenSach);
            break;
        case 3:
            if(danhSach.length > 0){
                let STT_sach = Number(prompt("Nhap So thu tu sach can doi :"));
                if(STT_sach <= 0 || STT_sach > danhSach.length)
                {
                    alert("Ban da nhap sai");
                }  
                else 
                {
                    let tenSachNew = prompt("Ten sach moi : ");
                    danhSach[STT_sach - 1] = tenSachNew;
                }
            }
            else
            {
                alert("Danh sách rỗng");
            }
            break;
        case 4:
            if(danhSach.length > 0){
                let number = Number(prompt('Nhap so thu tu sach muon xoa'));
                if (number <= 0 || number > danhSach.length){
                    alert('Ban da nhap sai');
                }
                else {
                    danhSach.splice(number - 1, 1);
                    alert('Xoa thanh cong');
                }
            }
            else
            {
                alert("Danh sách rỗng");
            }
            break;
        case 5:
            // Khi người dùng chọn 5, tức là muốn out CT,
            // đổi giá trị isExit tương ứng.
            isExit = true;
            break;
        default:
            alert("Nhập sai rồi, nhập lại.");            
    }
    // Mỗi khi người dùng nhập xong, hỏi CT: người dùng đã thoát chưa,
    // thông qua câu lệnh if(isExit), nếu đúng thì break khỏi vòng while,
    // kết thúc CT, không thì không làm gì cả.
    if(isExit){ 
        break;
    }
}
alert("Cam on ban!");