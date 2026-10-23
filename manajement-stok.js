import { createInterface } from "node:readline";
import { products } from "./data.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function stok() {
  products.map((item) => {
    console.log(`${item.id} ${item.nama} - Stok: ${item.stok}`);
  });
  console.log("================================");
  rl.question("cari ID Product: ", (info) => {
    if (Number(info) <= products.length) {
      console.log("Update stok?");
      console.log("1. Tambah stok");
      console.log("2. Kurangi stok");
      rl.question("pilih update: ", (stok) => {
        if (Number(stok) === 1) {
          console.log(`${Number(info)}. ${products[Number(info) - 1].nama}`);
          console.log(`Stok saat ini: ${products[Number(info) - 1].stok}`);
          rl.question("Tambah berapa?: ", (tambah) => {
            console.log("===== Berhasil ditambahkan ======");
            products[Number(info) - 1].stok += Number(tambah);
            console.log(`${Number(info)}. ${products[Number(info) - 1].nama}`);

            console.log(
              `Stok ditambahkan menjadi: ${products[Number(info) - 1].stok}`,
            );
            console.log(
              "============================================================",
            );
            setTimeout(() => {
              stok();
            }, 2000);
          });
        } else if (Number(stok) === 2) {
          console.log(`${Number(info)}. ${products[Number(info) - 1].nama}`);
          console.log(`Stok saat ini: ${products[Number(info) - 1].stok}`);
          rl.question("dikurangi berapa?: ", (kurangi) => {
            console.log("===== Berhasil ditambahkan ======");
            products[Number(info) - 1].stok -= Number(kurangi);
            console.log(`${Number(info)}. ${products[Number(info) - 1].nama}`);

            console.log(
              `Stok dikurangi menjadi: ${products[Number(info) - 1].stok}`,
            );
            setTimeout(() => {
              stok();
            }, 2000);
          });
        } else {
          console.log("Menu tidak tersedia");
        }
      });
    } else {
      console.log("Produk tidak tersedia");
      setTimeout(() => {
        stok();
      }, 2000);
    }
  });
}
