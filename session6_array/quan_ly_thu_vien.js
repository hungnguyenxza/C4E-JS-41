// Bài tập liên quan đến: CRUD
// C: Create
// R: Read
// U: Update
// D: Delete
let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện\n" +
            "2. Thêm sách\n" + 
            "3. Cập nhật thông tin sách\n" + 
            "4. Xóa sách\n" +
            "5. Mượn sách\n" +
            "6. Thống kê sách theo số lượng, tổng giá trị\n" +
            "7. Sắp xếp sách theo số lượng, đơn giá, tổng giá trị\n" +
            "8. Thoát";

let message = menu + "\nChọn menu: "
let danhSach = [];

while(true){
    let choose = Number(prompt(message));
    // Khai báo biến isExit đại diện cho việc người dùng muốn out CT,
    // mặc định ban đầu là người dùng chưa muốn out, tức = false
    let isExit = false;
    switch(choose){
        case 1:
            printListBook();
            break;
        case 2:
            addNewBook();
            break;
        case 3:
            editExistBook();
            break;
        case 4:
            if(danhSach.length > 0){
                let STT_sach = Number(prompt("Nhap So thu tu sach can doi :"));
                if(STT_sach <= 0 || STT_sach > danhSach.length)
                {
                    print("Ban da nhap sai");
                }  
                else 
                {
                    let tenSachNew = prompt("Ten sach moi : ");
                    danhSach[STT_sach - 1] = tenSachNew;
                }
            }
            else
            {
                print("Danh sách rỗng");
            }
            break;
        case 5:
            
            break;
        case 7:
            
            break;
        case 8:
            // Khi người dùng chọn 5, tức là muốn out CT,
            // đổi giá trị isExit tương ứng.
            isExit = true;
            break;
        default:
            print("Nhập sai rồi, nhập lại.");            
    }
    // Mỗi khi người dùng nhập xong, hỏi CT: người dùng đã thoát chưa,
    // thông qua câu lệnh if(isExit), nếu đúng thì break khỏi vòng while,
    // kết thúc CT, không thì không làm gì cả.
    if(isExit){ 
        break;
    }
}
print("Cam on ban!");

function editExistBook(){
    if(danhSach.length > 0){
        printListBook();
        let number = Number(prompt('Nhập STT muốn sửa:'));
        if (number <= 0 || number > danhSach.length){
            print('Bạn đã nhập sai');
        }
        else {
            let book = danhSach[number - 1];
            let newPrice = Number(prompt('Nhập giá sách mới: '));
            let newAmount = Number(prompt('Nhập số lượng mới: '));
            updateBook(book, book.name, newPrice, newAmount);
            print('Cập nhật thành công');
            printListBook();
        }
    }
    else
    {
        print("Danh sách rỗng");
    }
}

function addNewBook(){
    let newBookName = prompt("Nhập tên sách: ");
    let newAmout = Number(prompt("Nhấp số lượng sách: "));
    debugger;
    for (let i = 0; i < danhSach.length; i++) {
        const book = danhSach[i];
        if(newBookName.toUpperCase() == book.name.toUpperCase()){
            book.amount += newAmout;
            return;
        }
    }

    let newPrice = Number(prompt("Nhấp giá sách: "));

    let newBook = getDefaultBook();
    updateBook(newBook, newBookName, newPrice, newAmout);
    danhSach.push(newBook);
}

function getDefaultBook(){
    return {
        'name': '',
        'price': 0,
        'amount': 0
    }
}

function updateBook(book, name, price, amout){
    book.name = name;
    book.price = price;
    book.amount = amout;
}

function printListBook(){
    if(danhSach.length == 0){
        print("Danh sách trống !");
    }else{
        let m = "Danh Sách: \n";
        m = 'STT: Book detail';
        for (let index = 0; index < danhSach.length; index++) {
            const book = danhSach[index];
            m +=  '\n' + `${index + 1}: 
                        Name: ${book.name}, 
                        Price: ${book.price}, 
                        Amount: ${book.amount}`;
        }
        print(m);
    }
}

function print(message){
    alert(message);
}