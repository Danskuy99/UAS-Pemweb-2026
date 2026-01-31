const apiKey = "f60a3b5507ee1bb9e1b0db72691d4436";
const result = document.getElementById("result");

/* ======================
   1. CUACA VIA GPS
====================== */
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=id`;

            result.innerHTML = "📍 Mengambil cuaca dari lokasi GPS...";

            fetch(url)
                .then(res => res.json())
                .then(data => tampilkanCuaca(data, "Lokasi Anda (GPS)"))
                .catch(() => {
                    result.innerHTML = "⚠️ Gagal mengambil data GPS";
                });
        },
        () => {
            result.innerHTML = "⚠️ Izin lokasi ditolak";
        }
    );
}

/* ======================
   2. CUACA VIA KOTA
====================== */
function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        result.innerHTML = "⚠️ Masukkan nama kota terlebih dahulu";
        return;
    }

    result.innerHTML = "⏳ Mengambil data cuaca...";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                result.innerHTML = "❌ Kota tidak ditemukan";
                return;
            }
            tampilkanCuaca(data, data.name);
        })
        .catch(() => {
            result.innerHTML = "⚠️ Gagal mengambil data";
        });
}

/* ======================
   3. TAMPILKAN DATA
====================== */
function tampilkanCuaca(data, lokasi) {
    const weather = data.weather[0].main;
    const icon = data.weather[0].icon;
    const temp = data.main.temp;
    const desc = data.weather[0].description;

    setBackground(weather);

    result.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
        <h3>${lokasi}</h3>
        <p>🌡️ Suhu: <b>${temp} °C</b></p>
        <p>☁️ Cuaca: ${desc}</p>
        <small>Update: ${new Date().toLocaleTimeString()}</small>
    `;
}

/* ======================
   4. BACKGROUND DINAMIS
====================== */
function setBackground(weather) {
    const body = document.body;

    switch (weather) {
        case "Clear":
            body.style.background = "#ffe082";
            break;
        case "Rain":
            body.style.background = "#90caf9";
            break;
        case "Clouds":
            body.style.background = "#cfd8dc";
            break;
        case "Snow":
            body.style.background = "#e1f5fe";
            break;
        default:
            body.style.background = "#e0f7fa";
    }
}
