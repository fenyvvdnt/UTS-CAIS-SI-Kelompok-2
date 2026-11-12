# Collaborative Academic Information System (CAIS) - Kelompok 2

UTS Praktikum Collaborative Computing 
Program Studi Sistem Informasi

## Deskripsi Aplikasi
Collaborative Academic Information System (CAIS) adalah prototipe aplikasi web informasi akademik sederhana yang dikembangkan secara kolaboratif menggunakan Git dan GitHub. Aplikasi ini dirancang untuk mengelola dan menampilkan informasi dasar akademik mahasiswa secara terstruktur.

## Fitur Utama
1. **Halaman Beranda (`index.html`):** Halaman utama portal akademik beserta menu navigasi menuju seluruh modul.
2. **Modul Autentikasi (`pages/login.html`):** Form login portal akademik untuk mahasiswa dan dosen.
3. **Modul Dashboard (`pages/dashboard.html`):** Ringkasan informasi dan statistik akademik.
4. **Modul Data Mahasiswa (`pages/mahasiswa.html`):** Direktori tabel data mahasiswa aktif beserta fitur pencarian data berdasarkan NIM atau nama.

## Anggota Tim & Pembagian Kontribusi
1. Feny Widianti (NIM: `11523029`) — *Project Lead & Login Developer*
   - Inisialisasi repositori GitHub, manajemen workspace, struktur folder, dan halaman Beranda (`index.html`).
   - Pengembangan modul Login (`pages/login.html`, `css/style.css`) pada branch `feature-login`.
   - Integrasi modul, code review, serta penyelesaian merge conflict.
2. Azra Deliana Pratiwi (NIM: `11523050`) — *Dashboard Developer*
   - Pengembangan modul Dashboard (`pages/dashboard.html`) pada branch `feature-dashboard`.
   - Code review dan sinkronisasi branch.
3. Tesa Sulistia (NIM: `11523026`) — *Mahasiswa Module Developer*
   - Pengembangan modul Data Mahasiswa (`pages/mahasiswa.html`, `css/mahasiswa.css`, `js/mahasiswa.js`) pada branch `feature-mahasiswa`.
   - Penyusunan data contoh mahasiswa dan code review.

## Struktur Folder
```text
UTS-CAIS-SI-Kelompok-2/
├── css/
│   └── style.css
├── js/
│   └── mahasiswa.js
├── pages/
│   ├── dashboard.html
│   ├── login.html
│   └── mahasiswa.html
├── index.html
└── README.md