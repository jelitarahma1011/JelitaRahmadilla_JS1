// Contoh program JavaScript dengan if, else, dan nested if

// Deklarasi variabel umur dan memilikiIzin
var umur1 = 20;
var memilikiIzin1 = true;

// Penggunaan struktur if, else, dan nested if
if (umur1 >= 18) {
  if (memilikiIzin1) {
    console.log("Anda bisa mengemudi.");
  } else {
    console.log("Anda tidak bisa mengemudi karena tidak memiliki SIM.");
  }
} else {
  console.log("Anda belum cukup usia untuk mengemudi.");
}

// Contoh program JavaScript dengan switch case

// Deklarasi variabel hari
var hari1 = "Rabu";

// Penggunaan struktur switch case
switch (hari1) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Ini adalah hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Ini adalah hari libur.");
    break;
  default:
    console.log("Hari yang Anda masukkan tidak valid.");
}

// Contoh program JavaScript dengan for statement

// Penggunaan struktur for untuk mencetak bilangan ganjil dan genap
for (var i1 = 1; i1 <= 10; i1++) {
  if (i1 % 2 === 0) {
    console.log(i1 + " adalah bilangan genap.");
  } else {
    console.log(i1 + " adalah bilangan ganjil.");
  }
}

// Contoh program JavaScript dengan while loop

// Deklarasi variabel angka
var angka1 = 1;

// Penggunaan struktur while loop
while (angka1 <= 5) {
  console.log("Angka ke-" + angka1);
  angka1++;
}

// Contoh program JavaScript dengan do while loop

// Deklarasi variabel angka
var angka2 = 1;

// Penggunaan struktur do while loop
do {
  console.log("Angka ke-" + angka2);
  angka2++;
} while (angka2 <= 5);

// Contoh program JavaScript dengan fungsi

// Deklarasi dan penggunaan fungsi luasPersegiPanjang
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

var panjang1 = 5;
var lebar1 = 3;
var luas1 = luasPersegiPanjang(panjang1, lebar1);
console.log("Luas persegi panjang: " + luas1);
