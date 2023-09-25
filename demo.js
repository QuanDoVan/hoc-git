var sOut = "<table border=2>";
for (var y = 0; y < as2D.length; y++) {
   sOut += "<tr>";
   for (var x = 0; x < as2D[y].length; x++) {
      sOut += "<td>" + as2D[y][x] + "</td>";
   }
   sOut += "</tr>";
}
sOut += "</table>";

// Chức năng chọn hết
document.getElementById("btn1").onclick = function () {
   // Lấy danh sách checkbox
   var checkboxes = document.getElementsByName('name[]');

   // Lặp và thiết lập checked
   for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
   }
};