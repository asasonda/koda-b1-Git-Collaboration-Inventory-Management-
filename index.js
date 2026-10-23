import { createInterface } from "node:readline";
import { search } from "./search.js";
import { showProducts } from "./add-show-product.js";
import { products } from "./data.js";

console.log("-------------------------------------");
console.log("     Selamat datang di indomeret     ");
console.log("-------------------------------------");
console.log("------------ Pilih Menu -------------");
console.log("1. Daftar Product dan Tambahkan Product");
console.log("2. Cari Product");
console.log("3. Stok masuk dan stok keluar");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Pilih: ", (input) => {
  // inputan pemilihan
  switch (Number(input)) {
    case 1:
      // tampilkan barang dan tambahkan barang
      // masukin kedalam ini
      showProducts(products);
      rl.close();
      break;
    case 2:
      // pencarian barang
      search(rl);
      break;
    case 3:
      // manajement stok
      // masukin disini
      rl.close();
      break;
    default:
      console.log("Tidak ada pilihan");
      rl.close();
      break;
  }
});
