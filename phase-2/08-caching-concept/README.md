## Apa itu Cache (Browser Cache)?

Cache browser adalah area penyimpanan sementara di komputer pengguna yang menyimpan salinan sumber daya (HTML, CSS, JavaScript, gambar) dari situs web yang telah dikunjungi. Tujuannya adalah mempercepat waktu muat halaman saat pengguna mengunjungi kembali situs yang sama.

## Bagaimana Cara Kerja Sederhana?

- Ketika browser pertama kali mengunjungi situs, ia mengunduh semua sumber daya dan menyimpannya di cache.
- Saat browser mengunjungi situs yang sama lagi, ia memeriksa cache terlebih dahulu.
- Jika sumber daya ditemukan di cache dan masih valid (belum kadaluwarsa), browser akan memuatnya dari cache daripada mengunduhnya lagi dari server. Ini menghemat waktu dan bandwidth.

## Tipe Cache (Secara Umum):

- HTTP Cache (Browser Cache): Dikelola oleh header HTTP (misalnya Cache-Control, Expires).
- Service Workers (PWA): JavaScript API yang memungkinkan kontrol caching yang lebih granular untuk aplikasi web progresif (PWA), memungkinkan fungsionalitas offline.
- In-memory Cache (JavaScript): Variabel JavaScript yang menyimpan data sementara selama sesi aplikasi.

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

1. Cari tahu lebih lanjut tentang Cache-Control HTTP header dan bagaimana web server menggunakannya.
2. (Untuk tingkat lanjut) Jelajahi konsep dasar Service Workers dan bagaimana mereka dapat digunakan untuk membuat aplikasi offline.
