// function validasiNama() {

//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// };

function submit() {
  let nama = document.getElementById("nama");
  const emails = document.getElementById("email");
  //   let  = document.getElementById("nama");
  const subjek = document.getElementById("subjek").value;
  const pesan = document.getElementById("pesan").value;
  const instagram = document.getElementById("instagram");


  const email = "gmail.com";
  var validasiHuruf = /^[a-zA-Z ]+$/;



  if (
    nama.value == "" ||
    emails.value == "" ||
    subjek == "" ||
    pesan == ""
  ) {
    alert("Form Yang bertanda bintang wajid diisi");
    return false;
  } else if (!nama.value.match(validasiHuruf)) {
    alert("Nama harus dengan huruf");
    return false;
  } else if (!emails.value.endsWith(email)) {
    alert('Format email harus " gmail.com "');
    return false;
  } else {
    alert("Pesan anda Telah terkirim");

    return true;
  }
}

document.getElementById("formm").addEventListener("submit", (e) => {
  if (!submit()) {
    e.preventDefault();
  }
});
