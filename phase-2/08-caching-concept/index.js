// Contoh sangat sederhana untuk mengilustrasikan in-memory cache
const myCache = {}; // Objek untuk menyimpan data sementara

function getDataFromCache(key) {
    console.log(`Mencoba mengambil '${key}' dari cache...`);
    return myCache[key];
}

function saveDataToCache(key, data) {
    console.log(`Menyimpan '${key}' ke cache.`);
    myCache[key] = data;
}

function fetchData(key) {
    const cachedData = getDataFromCache(key);
    if (cachedData) {
        console.log(`Data '${key}' ditemukan di cache!`);
        return Promise.resolve(cachedData); // Mengembalikan Promise yang diselesaikan dengan data cache
    } else {
        console.log(`Data '${key}' TIDAK ditemukan di cache. Mengambil dari "server"...`);
        // Simulasikan panggilan API
        return new Promise(resolve => {
            setTimeout(() => {
                const data = `Data untuk ${key} dari server pada ${new Date().toLocaleTimeString()}`;
                saveDataToCache(key, data);
                resolve(data);
            }, 1000); // Penundaan 1 detik untuk simulasi
        });
    }
}

// Penggunaan
fetchData('productA').then(data => console.log(data)); // Pertama kali, akan ambil dari "server"
setTimeout(() => {
    fetchData('productA').then(data => console.log(data)); // Kedua kali, akan ambil dari cache
}, 2000);

fetchData('productB').then(data => console.log(data)); // Data baru, ambil dari "server"

// Catatan Penting: Untuk implementasi cache yang sebenarnya dan kuat (terutama untuk performa), 
// Anda akan menggunakan HTTP Cache Headers (dikonfigurasi di sisi server) atau Service Workers (untuk PWA). 
// Materi ini hanya memberikan gambaran konsep dasar cache.
