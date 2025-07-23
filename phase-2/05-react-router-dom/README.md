## Apa itu Router?

Dalam aplikasi web satu halaman (Single Page Application/SPA) seperti yang dibangun dengan React, router memungkinkan kita untuk membuat navigasi antar "halaman" atau tampilan tanpa memuat ulang seluruh halaman dari server. React Router DOM adalah library populer untuk ini.

## Konsep Penting:

- BrowserRouter: Komponen utama yang membungkus seluruh aplikasi dan mengelola riwayat browser.
- Routes: Wadah untuk mendefinisikan rute-rute aplikasi.
- Route: Mendefinisikan jalur (path) URL dan komponen yang akan dirender ketika jalur tersebut cocok.
- Link: Komponen untuk navigasi antar rute, mirip dengan tag <a> tapi tanpa memuat ulang halaman.
- useParams: Hook untuk mengambil parameter dari URL (misalnya /products/:id).

## Instalasi React Router DOM:

Untuk memulai dengan React, Anda perlu Node.js dan npm/yarn.
Cara paling mudah adalah dengan create-react-app (untuk project sederhana):

    // npm install react-router-dom
       # atau
       yarn add react-router-dom


## Contoh Framework Populer:

1. Bootstrap: Paling populer, banyak fitur, mudah dipelajari.
2. Tailwind CSS: Pendekatan utility-first, memberikan fleksibilitas tinggi.

    Contoh Menggunakan Bootstrap (Sederhana):
    1. Tambahkan Bootstrap CDN di <head> HTML Anda:
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    2. Tambahkan Bootstrap JS CDN di sebelum </body> penutup:
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

## Contoh Penggunaan

Lihat file `{framework}.html` untuk contoh implementasi JavaScript Events dalam kasus nyata.

## Latihan:

1.  Buat aplikasi sederhana dengan tiga halaman: Home, Products, dan Product Detail.
2.  Di halaman Products, tampilkan daftar produk. Ketika salah satu produk diklik, 
    navigasikan ke halaman Product Detail (/products/:id) dan tampilkan detail produk berdasarkan ID yang diambil dari URL.