  <?php

            // Baca data dari file bookings.txt
            
            $user = $_POST["username"];          
               $pass = $_POST["password"];  

            if($user==""&&$pass==""){
                
                 echo '<script type="text/JavaScript">  
    alert("Username atau Password tidak boleh kosong");
    window.location.href="../admin/admin.html" </script>' ; 
            }else{

            if($user=="admin"&&$pass=="pass"){
                echo '<link rel="stylesheet" href="../admin/admin.css">';
                $file = fopen("../contact/pesan.txt", "r");
                
                
                echo "<div class='table-cont'>";
                echo "<div class='table-cont1'>";
                echo "<h2>Pesan Yang Masuk</h2>";
                   
    while ($data = fgets($file)) {

      $isi = explode("|", trim($data));  
         $arrData = array();
       for ($i = 0; $i < count($isi); $i += 5) {
            $chars = array(
               "nama" => $isi[$i],
               "email" => $isi[$i + 1],
               "subjek" => $isi[$i + 2],
               "pesan" => $isi[$i + 3],
               "instagram" => $isi[$i + 4]
            );
            $arrData[] = $chars;
         }
         
          foreach ($arrData as $chars) {
              echo "<div class='table-isi'>";
            
         
              echo "<table border='1'>";
              echo "<tr>";
             
              echo '<td>Nama :' . $chars["nama"] . '</td>';
             
              echo "</tr>";
                  echo "<tr>";
             
              echo '<td>Email :' . $chars["email"] . '</td>';
             
              echo "</tr>";
                  echo "<tr>";
             
              echo '<td>Subjek :' . $chars["subjek"] . '</td>';
             
              echo "</tr>";
                  echo "<tr>";
             
              echo '<td>Pesan :' . $chars["pesan"] . '</td>';
             
              echo "</tr>";
                  echo "<tr>";
             
              echo '<td>Instagram :' . $chars["instagram"] . '</td>';
             
              echo "</tr>";
             
               
                 echo"</table>";
                 echo"<br>";
                 echo "</div>";
                }

                
                
                
                
                
            }
            
            echo "</div>";
 
            echo "</div>";

      fclose($file);
      
    
    
  }else{
    echo '<script type="text/JavaScript">  
    alert("Username dan Password anda salah");
    window.location.href="../admin/admin.html" </script>' ; 
    
    
  }
}
  
  
  
  
  
  
  
//   echo '<style>

// body{
// display:flex;
// }

//   .isi{
//     justify-content: center;
//     align-items: center;
//     background-color: aliceblue;

// }
// </style>
// ';
  
  
  
  
  ?>