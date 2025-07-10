## Konsep:
Mengintegrasikan API pihak ketiga adalah keterampilan penting. Ini memungkinkan aplikasi Anda mengambil data yang kaya dari sumber eksternal tanpa harus membuatnya sendiri.

## Langkah Umum:

1. Pilih API: Cari API yang sesuai dengan kebutuhan Anda.
2. Dapatkan Kunci API (jika diperlukan): Banyak API gratis memerlukan pendaftaran untuk mendapatkan kunci API guna melacak penggunaan dan otentikasi.
3. Baca Dokumentasi: Pahami endpoint, metode, parameter, dan format respons JSON.
4. Buat Permintaan: Gunakan Fetch API atau Axios untuk memanggil API.
5. Tampilkan Data: Proses respons JSON dan tampilkan di UI Anda.

## API Gratis yang Direkomendasikan:

    1. News API:
        - Website: https://newsapi.org/
        - Deskripsi: Menyediakan berita dari berbagai sumber dan topik. Membutuhkan kunci API gratis.
        - Endpoint Contoh: https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY
    
    2. The Movie Database (TMDB) API:
        - Website: https://www.themoviedb.org/documentation/api
        - Deskripsi: Database film dan TV show yang besar. Membutuhkan kunci API gratis.
        - Endpoint Contoh: https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY
    
    3. JSONPlaceholder:
        - Website: https://jsonplaceholder.typicode.com/
        - Deskripsi: Fake online REST API for testing and prototyping. Sangat bagus untuk latihan dasar tanpa memerlukan kunci API.
        - Endpoint Contoh: https://jsonplaceholder.typicode.com/posts
    
    4. OpenWeatherMap API:
        - Website: https://openweathermap.org/api
        - Deskripsi: Data cuaca. Membutuhkan kunci API gratis.
        - Endpoint Contoh: https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY

## Latihan:
News App: Buat aplikasi berita sederhana. Dapatkan kunci API dari News API. Tampilkan daftar headline berita. Tambahkan input untuk mencari berita berdasarkan kata kunci.