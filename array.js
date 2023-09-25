var mobile = ["HTC", "Nokia"];
var motorbike = ["Honda", "Yamaha", "Suzuki"];
var SinhVien = ["Nguyễn Thành Nhân", 1993];
var city = ["Cần Thơ", "Vĩnh Long"];
var data = motorbike.concat(city, SinhVien, mobile);

// Gán giá trị cho thẻ input
function setDomain() {
    let domain = 'freetuts.net';
    document.getElementById('domain').setAttribute('value', domain);
}

document.getElementById('action').onclick = function (e) {
    if (this.checked) {
        alert("Bạn vừa thích freetuts.net");
    }
    else {
        alert("Bạn vừa bỏ thích freetuts.net");
    }
}

//Get checkout value
document.getElementById('btn').onclick = function () {
    // Khai báo tham số
    var checkbox = document.getElementsByName('hobby');
    var result = "";

    // Lặp qua từng checkbox để lấy giá trị
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            result += ' [' + checkbox[i].value + ']';
        }
    }

    // In ra kết quả
    alert("Sở thích là: " + result);
}