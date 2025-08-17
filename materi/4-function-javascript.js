// FUNCTION DECLARATION
/*
    function namaFungsi(parameter){
        // list kode yang akan dijalankan
    }
*/

// Deklarasi Fungsi
function showMsg() {
  console.log("Haii coachhhh.....");
}
showMsg(); // Invoke (pemanggilan fungsi)
showMsg();
showMsg();

function fuYungHai() {
  console.log("Fu Yung Hai");
}
fuYungHai();

for (let i = 0; i < 5; i++) {
  showMsg();
}

// LOCAL VS GLOBAL VARIABEL
let fasum = "Kolam renang umum";

function rumahDicky() {
  let fasilitasDicky = "Private Pool";
  console.log(fasilitasDicky);
  console.log(fasum);
}

rumahDicky();

// SHADOWING VARIABEL
let nama = "Farizi";

function greeting() {
  nama = "Fariska";
  console.log("Hello", nama);
}

console.log(nama);
greeting();

// PARAMATERS DAN ARGUMENTS
/*
    Struktur parameter dan argument :
    function namaFungsi(parameter){ -> Parameter adanya di dalam fungsi
        // Kode yang bekerja dan memanggil parameter
    }
    
    namaFungsi(argument) -> Argumen hanya berada pada pemanggilan (invoke)
*/

console.log("\n");

function tanyaAlamat(kec = "Sriwijaya", kel, kota) {
  console.log(`Kec : ${kec}, Kel : ${kel}, Kota : ${kota}`);
}

let kec = "PakuJaya";

tanyaAlamat("Karawaci", "Cimone", "Tangerang");
tanyaAlamat(kec, "Jakarta Selatan", "Jakarta");

console.log("\n");

function salam(hello) {
  console.log(hello);
}

let salamNya = salam("Hello Coach");

console.log(salamNya);

// KEYWORD RETURN : Mengembalikan nilai ke dalam fungsi (function)

console.log("\n");

function tambah(a, b) {
  return a + b;
}
let tambahAngka = tambah(10, 6);
console.log(tambahAngka);

console.log("\n");

function kurang(a, b) {
  return a - b;
}

console.log(kurang(10, 2));
