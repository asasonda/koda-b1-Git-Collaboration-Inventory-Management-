import { createInterface } from "node:readline";
import { search } from "./search.js";
import { stok } from "./manajement-stok.js";
import { addProduct, showProducts } from "./add-show-product.js";
import { products } from "./data.js";

console.log("-------------------------------------");
console.log("     Selamat datang di indomeret     ");
console.log("-------------------------------------");
console.log("------------ Pilih Menu -------------");
console.log("1. Daftar Product");
console.log("2. Tambahkan Product");
console.log("3. Cari Product");
console.log("4. Stok masuk dan stok keluar");

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
      // tambahkan barang
      // masukin kedalam ini
      addProduct("Sambel", 2000, 50);
      rl.close();
      break;
    case 3:
      // pencarian barang
      search(rl);
      break;
    case 4:
      // manajement stok
      // masukin disini
      stok(rl);
      break;
    default:
      console.log("Tidak ada pilihan");
      rl.close();
      break;
  }
});
