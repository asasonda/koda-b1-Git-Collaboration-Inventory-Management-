import { createInterface } from 'node:readline';

console.log('-------------------------------------');
console.log('     Selamat datang di indomeret     ');
console.log('-------------------------------------');
console.log('------------ Pilih Menu -------------');
console.log('1. Daftar Product dan Tambahkan Product');
console.log('2. Cari Product');
console.log('3. Stok masuk dan stok keluar');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Pilih: ', (input) => {
  // inputan pemilihan
  switch (Number(input)) {
    case 1:
      // tampilkan barang dan tambahkan barang
      // masukin kedalam ini
      break;
    case 2:
      // pencarian barang
      // masukin ke dalam ini
      break;
    case 3:
      // manajement stok
      // masukin disini
      break;
    default:
      console.log('Tidak ada pilihan');
      break;
  }
  rl.close();
});
