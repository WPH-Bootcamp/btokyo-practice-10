"use strict";

// OPERATOR OR (||)
// let hour = 19;

// if (hour < 10 || hour > 18) {
//   if (hour > 18) {
//     console.log("Kantor tutup karena, sudah jam", hour);
//   } else {
//     console.log("Kantor tutup karena, masih jam", hour);
//   }
// } else {
//   console.log("Kantor sudah buka, karena sudah jam", hour);
// }

// OPERATOR AND (&&)
let makan = true;
let nyuciPiring = false;

// if (makan == true && nyuciPiring == true) {
//   console.log("Budi boleh main");
// } else {
//   if (makan == false) {
//     console.log("Budi makaaannnnnnn");
//   }
//   if (nyuciPiring == false) {
//     console.log("Budi nyuciiiiiiii");
//   }
// }

// NOT (!) => Berkebalikan nilai
// console.log(!true);
// console.log(!false);

// console.log(!!"not empty string");
// console.log(!!!!null);

// NULLISH COALESCING (??)

// yang tidak terdefinisi => null dan undefined
// let user = null;
// console.log(user ?? "Anonymous");

let userInput = null;
let username = userInput ?? "Guest";

if (username === "Guest") {
  console.log("Tidak ada username diberikan. Sedang menggunakan akun tamu");
} else {
  console.log(`Selamat datang, ${username}`);
}

if ((true && false) ?? true) {
  console.log("true");
}
