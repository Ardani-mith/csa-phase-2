import React, { useState } from 'react';
import './App.css'; // Opsional, untuk styling

// Komponen Fungsional Sederhana
function Greeting(props) {
  return <h1>Halo, {props.name}!</h1>;
}

// Komponen dengan State
function Counter() {
  const [count, setCount] = useState(0); // [nilai_saat_ini, fungsi_untuk_mengubah]

  return (
    <div>
      <p>Anda mengklik {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik Saya
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Menggunakan komponen Greeting */}
      <Greeting name="Dunia React" />
      <Greeting name="Pengguna Baru" />

      {/* Menggunakan komponen Counter */}
      <Counter />
    </div>
  );
}

export default App;

// Latihan:

// 1. Buat komponen ProductCard yang menerima props seperti name, price, dan image. Tampilkan daftar produk menggunakan komponen ini.
// 2. Buat komponen TodoList dengan input teks dan tombol "Tambah". Ketika tombol diklik, item baru ditambahkan ke daftar yang ditampilkan. Gunakan useState untuk mengelola daftar.