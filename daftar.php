<?php

// Baca data dari file bookings.txt
$user = $_POST["username"];          
$pass = $_POST["password"];  

echo '<link rel="stylesheet" href="lihat.css">';
$file = fopen("data.txt", "r");

$valid = false;

if ($user == "" || $pass == "") {
    echo '<script type="text/JavaScript">  
        alert("Username dan Password Tidak boleh kosong");
        window.location.href="../index.html";
    </script>';
} else {        
    while ($data = fgets($file)) {
        $isi = explode("|", trim($data));  
        $arrData = array();
        for ($i = 0; $i < count($isi); $i += 5) {
            $chars = array(
                "nama"   => $isi[$i],
                "tempat" => $isi[$i + 1],
                "date"   => $isi[$i + 2],
                "email"  => $isi[$i + 3],
                "pass"   => $isi[$i + 4]
            );
            $arrData[] = $chars;
        }
         
        foreach ($arrData as $chars) {
            if ($user == $chars["nama"] && $pass == $chars["pass"]) {
                $valid = true;
            } else {
                $valid = false;
            }
        }
        
        if ($valid) {
            header("Location: ../utama/utama.html");
            exit();
        } else {
            echo '<script type="text/JavaScript">  
                alert("Username dan Password anda salah");
                window.location.href="../index.html";
            </script>'; 
        }
    }
}

fclose($file);

?>
