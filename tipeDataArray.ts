let names: string[] = ["Putra", "Ujang", "Eko", "Kevin"]; 
// bisa dibuat seperti ini untuk membuat type array dengan string
console.log("Tpe data array = ", names[0]);

// Nah kalau untuk menambah data di array kita bisa menggunakan.
//contoh 
let nameLagi : Array<string> = [];
nameLagi.push("Puding"); // kita bisa menggukaan push methode.
nameLagi.push("Puding Aja");

// Cara mengubah value tipe data array
names[0] = "Hermansyah"
console.log("Tpe data array = ", names[0]);


let numbers : Array<number> = [1,2,3,4,5,6];
// Kita juga bisa menggunakan cara yg kedua ini, keduanya konsep penggunaan nya sama aja.
console.log("Array Number = ", numbers[1]);



// ==================================== Tipe Data Tuple =================================

// Biasanya Tuple digunakan untuk mengakalin kalau misalnya kita mau nge return lebih dari satu jenis tipe data, 
let student : [number, string, number] = [1, "Putra", 123123];
// Jadi cara penggunaan nya, kita memasukan value nya harus sama dengan apa yg kita daftarkan di awal.
console.log("Tipe daya Tuple = ", student[1]);

// Cara merubah Tipe data Tuple 
student[1] = "Lukas"; 
// kalau kita ingin mengubah kita harus perhatikan Index ke berapa dan tipe yg akan kita ubah itu apa, kita harus sesuaikan, kalau kita mengubah menggunakan tipe data yg berbeda, maka hasil nya akan terjadi error.
console.log("Tipe daya Tuple = ", student[1]);


// Dan untuk menghapus data yg ada di dalam array & tuple, kita bisa menggunakan.
delete names[3]; // tuliskan methode Delete lalu nama variable lalu di ikuti dengan data index keberapa yg ingin di hapus.