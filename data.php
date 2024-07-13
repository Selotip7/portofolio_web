<?php


if (isset($_POST['daftar'])) {
    $name = $_POST["name"];
    $tempat = $_POST["tempat"];
    
    $date = $_POST["date"];
      $email = $_POST["email"];
        $pass = $_POST["pass"];
  
     $booking = "$name| $tempat | $date |$email|$pass\n";
    $fp = fopen("data.txt", "a+");
    fwrite($fp, $booking);
    fclose($fp);
  }

 

  header("Location: ../index.html");
  exit();



?>

