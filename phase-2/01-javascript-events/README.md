# Belajar JavaScript Events

Repository ini berisi materi pembelajaran tentang JavaScript Events, yang merupakan bagian fundamental dalam pengembangan web interaktif.

## Apa itu JavaScript Events?

JavaScript Events adalah mekanisme yang memungkinkan website merespons interaksi pengguna dan perubahan yang terjadi di browser. Events dapat berupa:

- Interaksi mouse (klik, hover, dll)
- Input keyboard
- Perubahan form
- Loading halaman
- Dan lain-lain

## Konsep Penting

1. Event Listener
   - Metode untuk "mendengarkan" events pada elemen HTML
   - Menggunakan `addEventListener()` 
   - Contoh: `element.addEventListener('click', handler)`

2. Event Handler
   - Fungsi yang dijalankan saat event terjadi
   - Dapat berupa named function atau anonymous function
   - Menerima event object sebagai parameter

## Contoh Penggunaan

Lihat file `index.html` untuk contoh implementasi JavaScript Events dalam kasus nyata.

## Latihan:

1. Buat input teks dan sebuah tombol. Ketika tombol diklik, tampilkan isi input teks di bawahnya.
2. Buat sebuah kotak div. Ketika mouse masuk ke dalam kotak, ubah warnanya. Ketika mouse keluar, 
   kembalikan warnanya.