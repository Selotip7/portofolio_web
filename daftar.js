// function validasiNama() {

//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// };

function submit() {
  let nama = document.getElementById("nama");
//   let  = document.getElementById("nama");
const tempat = document.getElementById("tempat").value;
  const date = document.getElementById("date");
  const emails = document.getElementById("email");


  const pass = document.getElementById("pass").value;

  const email = "gmail.com";
  var validasiHuruf = /^[a-zA-Z ]+$/;

  var validnmr = /^[0-9]+$/;

  if (
    nama.value == "" ||
    date.value == "" ||
    emails.value == "" ||
    tempat == "" ||
    pass == "" 
    
  ) {
    alert("Form tidak boleh ada yang kosong");
    return false;
  } else if (!nama.value.match(validasiHuruf)) {
    alert("Nama harus dengan huruf");
    return false;
  } else if(!tempat.match(validasiHuruf)){
    alert("Tempat lahir harus dengan huruf");
    return false;
  }else if (!emails.value.endsWith(email)) {
    alert('Format email harus " gmail.com "');
    return false;
  }  else {
    alert("Anda Berhasil mendaftar");
   
    return true;
  }
}

document.getElementById("formm").addEventListener("submit", (e) => {
     if (!submit()) {
    e.preventDefault();
  }
  
});
