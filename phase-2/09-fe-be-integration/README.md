# Combine previous Project FE x BE with Axios (Fetch API)

## Konsep:

Setelah belajar Front-end (React) dan mungkin juga dasar Back-end (misalnya Node.js Express), langkah selanjutnya adalah menggabungkan keduanya. Front-end akan berkomunikasi dengan Back-end untuk mengambil atau mengirim data. Axios adalah library HTTP client berbasis Promise yang populer untuk browser dan Node.js, sering digunakan sebagai alternatif dari built-in Fetch API.

## Mengapa Axios (vs Fetch API)?

    Axios:

    - Berbasis Promise (sama seperti Fetch).
    - Otomatis mengubah JSON (tidak perlu response.json()).
    - Penanganan error yang lebih baik secara default.
    - Dukungan untuk request dan response interceptor (untuk menambahkan header, logging, dll).
    - Kompatibilitas browser yang lebih luas (ada polyfill untuk IE).
    - Pembatalan permintaan.

    Fetch API:

    - Built-in di browser modern, tidak perlu instalasi.
    - Berbasis Promise.
    - Lebih ringan karena tidak ada library tambahan.

## Setup Backend (Contoh Sederhana dengan Node.js Express):

    1. Buat folder baru: mkdir backend && cd backend
    2. Inisialisasi project: npm init -y
    3. Install Express dan CORS: npm install express cors
    4. Buat file index.js:
        << backend/index.js >>
    5. Jalankan backend: node index.js

## Integrasi Frontend (React dengan Axios/Fetch API):

    1. Install Axios (jika menggunakan): npm install axios di folder React Anda.
    2. Contoh Komponen React:
        << src/components/ItemList.js >>
    3. Sertakan ItemList:
        << src/App.js >>

## Langkah-langkah untuk Menggabungkan Proyek:

1. Pastikan Anda memiliki proyek Front-end (React) dan proyek Back-end (misalnya Node.js Express) dalam folder terpisah.
2. Jalankan server Back-end terlebih dahulu.
3. Jalankan aplikasi Front-end Anda.
4. Gunakan Axios atau Fetch API di komponen React Anda untuk membuat permintaan GET dan POST ke API Back-end Anda.
5. Pastikan konfigurasi CORS di Back-end Anda mengizinkan permintaan dari origin Front-end Anda.