function print_number() {
    // Lấy number
    var number = document.getElementById("number").value;

    // Ép number sang kiểu INT
    number = parseInt(number);

    // Lặp để in kết quả
    var html = '';
    for (var i = 1; i <= number; i++) {
        html += i + ' <br/>';
    }
    document.getElementById("result").innerHTML = html;
}

function tinh_tong(n)
{
    var tong = 0;
    var index = 0;
 
    while (index <= n)
    {
        // Nếu số chẵn thì cộng vào
        if (index % 2 == 0){
            tong += index;
        }
 
        // tăng biến đếm
        index++;
    }
 
    document.write("Tổng số chẵn từ 1 tới " + n + " là: " + tong + "<br/>");
}