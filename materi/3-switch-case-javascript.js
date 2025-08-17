// SWITCH
/*
    Struktur dasar switch:

    switch(ekspresi_kondisi){
        case "1":
            // kode yang akan dijalankan
            break;
        case "2":
            // kode yang akan dijalankan
            break;
        default:
            // kode yang akan dijalankan
    }
*/

let grade = "C";

switch (grade) {
  case "A":
    console.log("Nilai anda rentang dari 91 - 100");
    break;
  case "B":
    console.log("Nilai anda rentang dari 81 - 90");
    break;
  default:
    console.log("Anda tidak naik kelas");
}

let operator = "+";
nilai1 = 10;
nilai2 = 20;

switch (operator) {
  case "+":
    console.log(nilai1 + nilai2);
    break;
  case "-":
    console.log(nilai1 - nilai2);
    break;
  case "*":
    console.log(nilai1 * nilai2);
    break;
  case "/":
    console.log(nilai1 / nilai2);
    break;
  default:
    console.log("Tolong pilih operator");
}

if (operator == "+") {
  console.log(nilai1 + nilai2);
} else if (operator == "-") {
  console.log(nilai1 + nilai2);
}
