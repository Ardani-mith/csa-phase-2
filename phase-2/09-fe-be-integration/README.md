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

## 🔮 Cara Menggunakan API Genderize.io:

API Genderize.io adalah layanan untuk memprediksi gender berdasarkan nama. Aplikasi ini mendemonstrasikan 2 cara menggunakan API external:

### 1. Direct API Call (Frontend → Genderize.io)
```javascript
// Contoh request langsung ke API Genderize.io
const response = await axios.get('https://api.genderize.io?name=luc');
console.log(response.data);
// Output: { name: "luc", gender: "male", probability: 0.85, count: 1234 }
```

### 2. Via Backend Proxy (Frontend → Backend → Genderize.io)
```javascript
// Single name prediction
const response = await axios.get('http://localhost:3001/api/gender/luc');

// With country localization
const response = await axios.get('http://localhost:3001/api/gender/luc?country=FR');

// Batch prediction
const response = await axios.post('http://localhost:3001/api/gender/batch', {
  names: ['John', 'Mary', 'Alex', 'Sarah']
});
```

### API Endpoints yang Tersedia:

#### Internal API (Backend):
- `GET /api/items` - Mengambil semua item
- `POST /api/items` - Menambah item baru
- `PUT /api/items/:id` - Update item berdasarkan ID
- `DELETE /api/items/:id` - Hapus item berdasarkan ID

#### External API Proxy (Genderize.io):
- `GET /api/gender/:name` - Prediksi gender single name
- `GET /api/gender/:name?country=US` - Prediksi gender dengan lokalisasi negara
- `POST /api/gender/batch` - Batch prediction (maksimal 10 nama)

### Fitur Gender Prediction:
- ✅ **Direct API Call** - Langsung ke Genderize.io dari frontend
- ✅ **Backend Proxy** - Melalui backend sebagai proxy
- ✅ **Country Localization** - Prediksi berdasarkan negara tertentu
- ✅ **Batch Processing** - Prediksi multiple names sekaligus
- ✅ **History Tracking** - Riwayat prediksi yang pernah dilakukan
- ✅ **Error Handling** - Penanganan error yang comprehensive

### Keuntungan Backend Proxy:
- 🔒 **Security** - API key tidak terekspos di frontend
- ⚡ **Caching** - Bisa menambahkan cache di backend
- 📊 **Analytics** - Tracking usage dan statistics
- 🛡️ **Rate Limiting** - Kontrol request rate
- 🔄 **Batch Processing** - Multiple requests optimization
- 🚫 **CORS** - Menghindari masalah CORS

### Response Format:
```json
{
  "name": "luc",
  "gender": "male",
  "probability": 0.85,
  "count": 1234,
  "source": "genderize.io",
  "requestedAt": "2024-01-01T10:00:00.000Z",
  "proxiedBy": "backend-api"
}
```

## Cara Menjalankan Aplikasi:

### 1. Setup Backend
```bash
cd backend
npm install  # Install axios, cors, express
npm start    # Jalankan di http://localhost:3001
```

### 2. Setup Frontend (Terminal Baru)
```bash
cd frontend-react
npm install  # Install dependencies
npm start    # Jalankan di http://localhost:3000
```

## Latihan Tambahan:

1. ✅ **DELETE Function** - Sudah implementasi dengan konfirmasi
2. ✅ **UPDATE Function** - Sudah implementasi dengan inline editing
3. ✅ **External API Integration** - Genderize.io API
4. **Caching** - Tambahkan cache di backend untuk API responses
5. **Database** - Ganti dari array ke database (MongoDB/PostgreSQL)
6. **Authentication** - Tambahkan login/logout functionality
7. **Other APIs** - Integrasikan API lain seperti weather, news, dll

## Tech Stack:
- **Backend**: Node.js + Express.js + CORS + Axios
- **Frontend**: React.js + Axios + CSS3
- **External API**: Genderize.io
- **Communication**: REST API dengan JSON

Aplikasi ini mendemonstrasikan integrasi frontend-backend yang lengkap dengan internal dan external API integration! 🚀