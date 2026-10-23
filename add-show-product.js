import { products } from "./data.js";

export function showProducts(data) {
  let textContent = "\n============= Daftar Menu =============\n\n";

  data.forEach((product) => {
    textContent += `${product.id}. ${product.nama.toLocaleUpperCase()} \n\t— RP. ${product.harga.toLocaleString("id-ID")} \n\t— stok: ${product.stok}\n`;
  });

  console.log(textContent);
}

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
