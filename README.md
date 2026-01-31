# 🌦️ Weather Info Website

## Deskripsi Proyek
Weather Info Website adalah sebuah website sederhana yang menampilkan informasi cuaca secara real-time. Website ini memanfaatkan **OpenWeatherMap API** untuk mengambil data cuaca berdasarkan **lokasi GPS pengguna** maupun **nama kota yang diinput secara manual**.

Proyek ini dibuat untuk memenuhi kebutuhan pembelajaran integrasi API pada pengembangan website menggunakan teknologi frontend.

---

## Tujuan Proyek
- Menerapkan konsep dasar pembuatan website
- Mengintegrasikan API eksternal ke dalam aplikasi web
- Menampilkan data cuaca secara dinamis
- Meningkatkan pengalaman pengguna dengan tampilan interaktif

---

## Teknologi yang Digunakan
- **HTML** → Struktur halaman
- **CSS** → Tampilan dan animasi antarmuka
- **JavaScript** → Logika aplikasi & pengolahan API
- **OpenWeatherMap API** → Sumber data cuaca
- **Geolocation API (Browser)** → Mendapatkan lokasi pengguna

---

## Struktur Folder
weather-app
│── index.html
│── style.css
│── script.js
└── README.md


---

## ⚙️ Fitur Aplikasi
- Deteksi cuaca otomatis berdasarkan **lokasi GPS**
- Pencarian cuaca berdasarkan **nama kota**
- Loading state saat pengambilan data
- Pesan error jika kota tidak ditemukan
- Ikon cuaca dari API
- Background berubah sesuai kondisi cuaca
- Support tombol **Enter**
- Animasi dan efek UI modern

---

## API yang Digunakan
**OpenWeatherMap API**

- Endpoint (Kota):
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}


- Endpoint (GPS):
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}


- Method: `GET`
- Format Data: `JSON`

---

## Cara Mendapatkan API Key
1. Buka website OpenWeatherMap
2. Daftar akun gratis
3. Masuk ke dashboard
4. Salin **API Key**
5. Masukkan API Key ke file `script.js`

Contoh:
```javascript
const apiKey = "API_KEY_KAMU";

