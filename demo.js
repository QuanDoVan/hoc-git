var sOut="<table border=2>";
   for (var y=0; y<as2D.length; y++ ) { // for each row
      sOut += "<tr>";
      for (var x=0; x<as2D[y].length; x++ ) { // for each clm
         sOut += "<td>" + as2D[y][x] + "</td>";
      }
       sOut += "</tr>";
   }
   sOut += "</table>";