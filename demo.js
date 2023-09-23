var sOut="<table border=2>";
   for (var y=0; y<as2D.length; y++ ) {
      sOut += "<tr>";
      for (var x=0; x<as2D[y].length; x++ ) {
         sOut += "<td>" + as2D[y][x] + "</td>";
      }
       sOut += "</tr>";
   }
   sOut += "</table>";