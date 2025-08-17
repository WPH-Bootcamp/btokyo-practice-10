// ARROW FUNCTION (=>)
let nama = () => {
  return "Dicky";
};

console.log(nama());

// Arrow function : bisa oneline code
let umur = () => 20;
console.log(umur());

let alamat = (kota, kodePos) => `${kota} dan ${kodePos}`;
console.log(alamat("Tangerang", 12093));

let age = 19;

let welcome =
  age >= 18 ? () => console.log("Dewasa") : () => console.log("Remaja");

welcome();

// Arrow function : bisa multiline code
let sayHi = (nama) => {
  console.log("Haii saya adalah", nama);
};

sayHi("Rehan");

// CALLBACK dengan Arrow Function
let ask = (pertanyaan, ya, tidak) => {
  if (true) ya();
  else tidak();
};

ask(
  "Kamu tau saya?",
  () => console.log("yaaa saya tau anda"),
  () => console.log("saya tidak tau")
);

// Anonymous arrow function : arrow function tanpa nama
