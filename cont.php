<?php



if (isset($_POST['Kirim'])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subjek = $_POST["subjek"];
    $pesan = $_POST["pesan"];
    $instagram = $_POST["instagram"];
    
        $data = "$name |$email|$subjek|$pesan|$instagram \n";
  
    $fp = fopen("pesan.txt", "a+");
    fwrite($fp, $data);
    fclose($fp);
  }

 

  header("Location: ../utama/utama.html");
  exit();



?>

