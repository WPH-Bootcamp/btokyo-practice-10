// 1. LOOPING : WHILE
/*
    Struktur dasar while loop :
    while(parameter_kondisi){
        // kode yang ingin dijalankan
    }
*/
console.log("WHILE");
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

console.log("\n");

// 2. LOOPING : DO...WHILE
/*
    Struktur dasar do...while loop :
    do{
        // Kode yang ingin dijalankan
    }
    while(parameter_kondisi);
*/
console.log("DO WHILE");
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

console.log("\n");

// 3. LOOPING : FOR
/*
    Struktur dasar for loop :
    for(inisialisasi; kondisi; step){
        // Kode yang ingin dijalankan
    }
*/
console.log("FOR");
for (let counter = 0; counter <= 10; counter++) {
  console.log(counter);
}

console.log("\n");

// 4. KEYWORD : BREAK & CONTINUE

// -. break : menghentikan loop secara paksa
console.log("KEYWORD : BREAK");
for (let i = 0; i < 1000; i++) {
  if (i == 976) {
    console.log(i);
    break;
  }
}

console.log("\n");

// -. continue : mengabaikan
console.log("KEYWORD : CONTINUE");

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
