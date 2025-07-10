## Apa itu State Management?

State management adalah cara mengelola data yang berubah dalam aplikasi Anda, terutama di aplikasi React yang kompleks. Ketika aplikasi Anda bertambah besar, berbagi data antar komponen bisa menjadi rumit. State management membantu mengatasi ini dengan menyediakan "sumber kebenaran tunggal" untuk data.

## Mengapa Penting?

- Skalabilitas: Mempermudah pengelolaan data di aplikasi besar.
- Prediktabilitas: Membuat aliran data lebih mudah diprediksi dan di-debug.
- Efisiensi: Mengoptimalkan rendering komponen saat data berubah.

## Pendekatan State Management:

- State Lokal Komponen (useState): Paling dasar, untuk data yang hanya relevan dengan satu komponen.
- Lifting State Up: Memindahkan state ke komponen induk terdekat yang perlu berbagi state tersebut.
- Context API: Built-in di React, memungkinkan berbagi state tanpa "prop drilling" (meneruskan props melalui   banyak level komponen). Cocok untuk state global sederhana seperti tema atau info user.
- Redux/Zustand/Jotai (Library Pihak Ketiga): Untuk aplikasi sangat kompleks dengan banyak state yang saling terkait dan logika bisnis yang rumit.

## Contoh Penggunaan

Lihat context-api-management untuk contoh implementasi JavaScript Events dalam kasus nyata.