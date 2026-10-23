import { products } from './data.js';

export function search(rl) {
  rl.question('Cari : ', (searchName) => {
    const result = products.filter((v) =>
      v.nama.toLowerCase().includes(searchName.toLowerCase()),
    );

    result.length > 0
      ? console.log(result)
      : console.log(`Pencarian ${searchName} tidak ditemukan`);
    rl.close();
  });
}
