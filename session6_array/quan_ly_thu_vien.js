// Bài tập liên quan đến: CRUD
// C: Create
// R: Read // Sort, Search, Filter
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
            "8. Tìm kiếm\n" +
            "9. Thoát";

let message = menu + "\nChọn menu: "
let danhSach = [];
defaultLibraryBooks();
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
            deleteExistBook();
            break;
        case 5:
            borrowBook();
            break;
        case 6:
            statisticBook();
            break;
        case 7:
            //
            break;
        case 8:
            // Tìm kiếm
            let menuSearch = "Menu Tìm kiếm: \n"+
                        "1. Tìm theo tên\n" +
                        "2. Lọc theo số lượng\n" + 
                        "3. Lọc theo đơn giá\n" + 
                        "4. Lọc theo tổng giá trị\n" +
                        "Nhấn phím bất kì để thoát (# 1,2,3,4)\n";
            
            let isExitSearch = false;

            while(true){
                isExitSearch = false;
                let chooseSearch = Number(promt(menuSearch));
                switch (chooseSearch){
                    case 1:
                        //function
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    default:
                        isExitSearch = true;
                        break;
                }

                if(isExitSearch){
                    break;
                }
            }
            break;
        case 9:
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

function statisticBook(){
    if(danhSach.length > 0){
        //Thống kê theo số lượng sách
        let listBook = sortAmountBook();
        print("Thứ tự sách theo số lượng tăng dần:");
        printListBook(listBook);

        print("Thứ tự sách theo số lượng giảm dần:")
        listBook.reverse();
        printListBook(listBook);

        //Thống kê theo đơn giá sách
        listBook = sortPriceBook();
        print("Thứ tự sách theo đơn giá tăng dần:");
        printListBook(listBook);

        print("Thứ tự sách theo đơn giá giảm dần:")
        listBook.reverse();
        printListBook(listBook);

        // Thống kê theo tổng giá trị sách
        listBook = sortByTotalValueBook();
        print("Thứ tự sách theo tổng giá trị tăng dần:");
        printListBook(listBook);

        print("Thứ tự sách theo tổng giá trị giảm dần:")
        listBook.reverse();
        printListBook(listBook);
    }else{
        print("Danh sách rỗng")
    }
}

function sortByTotalValueBook(){
    //copy danhSach, để việc sắp xếp k ảnh hướng tới danhSach hiện tại
    let listBook = JSON.parse(JSON.stringify(danhSach));

    //Sắp xếp
    for (let i = 0; i < listBook.length; i++) {
        for (let j = 0; j < listBook.length - 1; j++) {
            listBook[j].total = listBook[j].amount * listBook[j].price;
            listBook[j + 1].total = listBook[j + 1].amount * listBook[j + 1].price;
            if(listBook[j].total >= listBook[j + 1].total){
                let temp = listBook[j];
                listBook[j] = listBook[j + 1];
                listBook[j + 1] = temp;
            }
        }        
    }
    return listBook;
}

function sortAmountBook(){
    return sortByKeyBook('amount');
}

function sortPriceBook(){
    return sortByKeyBook('price');
}

function sortByKeyBook(key){
    //copy danhSach, để việc sắp xếp k ảnh hướng tới danhSach hiện tại
    let listBook = JSON.parse(JSON.stringify(danhSach));

    //Sắp xếp
    for (let i = 0; i < listBook.length; i++) {
        for (let j = 0; j < listBook.length - 1; j++) {
            if(listBook[j][key] >= listBook[j + 1][key]){
                let temp = listBook[j];
                listBook[j] = listBook[j + 1];
                listBook[j + 1] = temp;
            }
        }        
    }
    return listBook;
}

function borrowBook(){
    if(danhSach.length > 0){
        printListBook();
        let number = Number(prompt("Nhập STT muốn mượn:"));
        if(number <= 0 || number > danhSach.length){
            print("Bạn đã nhập sai");
        }
        else{
            let amount = Number(prompt("Nhập số lượng mượn:"));
            let borrowBook = danhSach[number - 1];
            if(borrowBook.amount < amount){
                print("Không đủ sách để mượn");
            }else{
                borrowBook.amount -= amount;
                print("Mượn thành công sách");
            }
            printListBook();
        }
    }
    else{
        print("Danh sách rỗng");
    }
}

function deleteExistBook(){
    if(danhSach.length > 0){
        printListBook();
        let number = Number(prompt("Nhập STT muốn xóa:"));
        if(number <= 0 || number > danhSach.length){
            print("Bạn đã nhập sai");
        }
        else{
            danhSach.splice(number - 1, 1);
            print("Xóa thành công");
            printListBook();
        }
    }
    else{
        print("Danh sách rỗng");
    }
}

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

    // nếu sách đã thêm thì cộng gộp vào tổng số lượng sách
    for (let i = 0; i < danhSach.length; i++) {
        const book = danhSach[i];
        if(newBookName.toUpperCase() == book.name.toUpperCase()){
            book.amount += newAmout;
            return;
        }
    }

    let newPrice = Number(prompt("Nhấp giá sách: "));

    // Sách mới thì tạo mới vào thêm vào danh sách
    let newBook = getDefaultBook();
    updateBook(newBook, newBookName, newPrice, newAmout);
    danhSach.push(newBook);
}

// Hiển thị danh sách sách, nếu truyền tham số thì in danh sách của tham số,
// không truyền thì lấy mặc định in danhSach
function printListBook(listBook){
    if(typeof(listBook) == 'undefined'){
        listBook = danhSach;
    }
    if(listBook.length == 0){
        print("Danh sách trống !");
    }else{
        let m = "Danh Sách: \n";
        m = 'STT: Book detail';
        for (let index = 0; index < listBook.length; index++) {
            const book = listBook[index];
            m +=  '\n' + `${index + 1}: ` + bookToString(book);
        }
        print(m);
    }
}

// Tạo sách với các thông tin mặc định, tạo sự thống nhất giữa các lần thêm sách
function getDefaultBook(){
    return {
        'name': '',
        'price': 0,
        'amount': 0
    }
}

// update thông tin sách với các thông tin mới
function updateBook(book, name, price, amout){
    book.name = name;
    book.price = price;
    book.amount = amout;
}

function bookToString(book){
    let s = '';
    for (const key in book) {
        const value = book[key];
        s += key + ': ' + value + ', ';
    }
    if(s.length > 0){
        s = s.substring(0, s.length - 2);
    }
    return s;
}

function print(message){
    alert(message);
}

function defaultLibraryBooks(){
    let book1 = getDefaultBook();
    updateBook(book1, "Sách 1", 10000, 10);
    let book2 = getDefaultBook();
    updateBook(book2, "Sách 2", 20000, 20);
    danhSach.push(book1, book2);
}