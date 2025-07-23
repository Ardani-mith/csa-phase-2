## Apa itu React.js?

React.js (sering disebut React) adalah library JavaScript untuk membangun User Interface (UI) yang interaktif dan efisien. React berfokus pada "komponen" yang merupakan blok bangunan UI yang mandiri dan Reusable (Dapat digunakan kembali)

## Konsep Penting:

- Component-Based: Aplikasi React dibangun dari komponen-komponen kecil yang terisolasi.
- JSX: Sintaks ekstensi JavaScript yang memungkinkan Anda menulis HTML di dalam JavaScript.
- Virtual DOM: React menggunakan Virtual DOM untuk efisiensi pembaruan UI.
- Props: Cara mengirim data dari komponen induk ke komponen anak.
- State: Data internal suatu komponen yang dapat berubah seiring waktu dan memicu pembaruan UI.

## Persiapan (Instalasi):

Untuk memulai dengan React, Anda perlu Node.js dan npm/yarn.
Cara paling mudah adalah dengan create-react-app (untuk project sederhana):

    // npx create-react-app my-react-app
        cd my-react-app
        npm start

## Contoh Kode:

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
            <img src={logo} className="App-logo" alt="React Logo" />
            <Greeting name="Dunia React" />
            <Greeting name="Pengguna Baru" />

            {/* Menggunakan komponen Counter */}
            <Counter />
            </div>
        );
    }

## Latihan

1.  Buat komponen ProductCard yang menerima props seperti name, price, dan image. 
    Tampilkan daftar produk menggunakan komponen ini.
2.  Buat komponen TodoList dengan input teks dan tombol "Tambah". 
    Ketika tombol diklik, item baru ditambahkan ke daftar yang ditampilkan. Gunakan useState untuk mengelola daftar.