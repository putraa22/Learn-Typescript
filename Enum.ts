// Enum digunakan kalau memaeng data yg kita miliki sudah fix, tidak ada yg ditambahi atau dikurangi.
enum Gender {Male, Female = "Female", Unknown =" unknown"};
// Kita juga bisa buat enum string, tinggal kita namtahin ' = ' lalu di ikuti dengan petik 2 lalu isi value nya.
let jenisKelamin : Gender = Gender.Female;

console.log(jenisKelamin);
