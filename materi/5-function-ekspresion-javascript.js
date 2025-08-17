// function salam() {
//   return "hello";
// }

// let salamDicky = salam;

// console.log(salamDicky());

// FUNCTION EKSPRESION
let salam = function () {
  console.log("Hello dehhh");
};

salam();

// Notes : Anonymous Function : Fungsi tanpa nama

// CALLBACK
function ask(question, yes, no) {
  if (true) yes();
  else no();
}

ask(
  "Are you okayy??",
  function () {
    console.log("You say okaayyy");
  },
  function () {
    console.log("You say NOOOOO");
  }
);

// Studi kasus : Kalkulator
function calculator(a, b, operator) {
  return operator(a, b);
}

function perkalian(x, y) {
  return x * y;
}

function penjumlahan(x, y) {
  return x + y;
}

let result = calculator(3, 5, penjumlahan);

console.log(result);
