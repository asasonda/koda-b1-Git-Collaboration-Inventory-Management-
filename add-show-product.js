import { products } from "./data.js";

/**
 *
 * Fungsi digunakan untuk menampilkan data produk
 *
 * @param {Object[]} data - parameter untuk menampung array berisi objek produk
 * @returns {void} hanya menampilkan teks, tidak mengembalikan nilai
 */

export function showProducts(data) {
  let textContent = "\n============= Daftar Menu =============\n\n";

  data.forEach((product) => {
    textContent += `${product.id}. ${product.nama.toLocaleUpperCase()} \n\t— RP. ${product.harga.toLocaleString("id-ID")} \n\t— stok: ${product.stok}\n`;
  });

  console.log(textContent);
}

/**
 *
 * @param {string} nama - nama produk baru
 * @param {number} harga - harga produk baru
 * @param {number} stok - stok produk baru
 * @returns {updateProducts} array baru berisi produk yang ditambahkan
 */

export function addProduct(nama, harga = 0, stok = 0) {
  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 0;

  const newProduct = {
    id: newId,
    nama,
    harga,
    stok,
  };

  const updateProducts = [...products, newProduct];

  console.log(
    `Produk ${newProduct.nama} berhasil ditambahkan dg stok ${newProduct.stok}`,
  );

  return updateProducts;
}
