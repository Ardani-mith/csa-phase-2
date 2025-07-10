## Apa itu Local Storage?

Local Storage adalah mekanisme penyimpanan data di sisi klien (browser) yang memungkinkan situs web menyimpan data dalam jumlah yang relatif besar (sekitar 5-10 MB) secara persisten tanpa batas waktu (sampai dihapus oleh pengguna atau kode). Data disimpan dalam bentuk pasangan kunci-nilai (key-value pair).

Kelebihan:
- Persisten: Data tetap ada bahkan setelah browser ditutup.
- Mudah Digunakan: API yang sederhana.

Kekurangan:
- Tidak Aman: Tidak cocok untuk data sensitif.
- Hanya String: Data disimpan sebagai string, perlu JSON.stringify() dan JSON.parse() untuk objek/array.
- Sinkronus: Dapat memblokir thread utama jika data terlalu besar.

## Konsep Penting

- Node: Setiap bagian dari dokumen (elemen, teks, atribut) adalah sebuah node.
- Selektor: Cara untuk menemukan elemen HTML di DOM (misalnya getElementById, querySelector, querySelectorAll).
- Manipulasi: Mengubah konten (textContent, innerHTML), atribut (setAttribute), dan gaya (style).
- Membuat/Menghapus Elemen: Menambah (appendChild, createElement) dan menghapus (removeChild) elemen.

## Contoh Penggunaan

Lihat file `index.html` untuk contoh implementasi JavaScript Events dalam kasus nyata.