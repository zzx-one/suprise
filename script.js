// ==========================
// KONFIGURASI
// ==========================

const SPREADSHEET_API_URL =
"https://script.google.com/macros/s/AKfycbx9lqOllkIGhF81KxHJ0UdOqGngObi1K3P3H3gmi-DfM281VcJc5l2kd7EO_e8RzsNfSg/exec";

const TANGGAL_JADIAN = "2025-07-20";

const AUTH_USER_HASH =
"fea0c432ca8d650c26174e2d7cd951960e5e73121409d3b284ae00dd18051dc9";

const AUTH_PASS_HASH =
"f84cf1c5a4e5436b88c50f7ae39ebae74b8ba9b8283ca5971fb1d74b667cc944";


// ==========================
// ELEMENT
// ==========================

const backsound = document.getElementById("backsound");
const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");


// ==========================
// START
// ==========================

window.onload = () => {
    mulaiEfekHati();
};


// ==========================
// LOGIN
// ==========================

function prosesLogin() {

    const user = document
        .getElementById("username")
        .value
        .trim()
        .toLowerCase();

    const pass = document
        .getElementById("password")
        .value;

    const userHash = CryptoJS.SHA256(user).toString();
    const passHash = CryptoJS.SHA256(pass).toString();

    if (
        userHash === AUTH_USER_HASH &&
        passHash === AUTH_PASS_HASH
    ) {

        const loginScreen =
            document.getElementById("login-screen");

        loginScreen.style.opacity = "0";

        setTimeout(() => {

            loginScreen.style.display = "none";

            document.getElementById("welcome-screen")
                .style.display = "flex";

        }, 700);

        hitungDurasiJadian();
        muatKenanganDariSheets();

    } else {

        document.getElementById("login-error")
            .style.display = "block";

        document.getElementById("password").value = "";
    }
}


// ==========================
// BUKA AMPLOP
// ==========================

function bukaAmplop() {

    document.getElementById('welcome-screen').style.display = 'none';

    // tampilkan section utama
    document.getElementById('home').style.display = 'flex';

    document.getElementById('timeline').style.display = 'block';

    document.getElementById('anniversary').style.display = 'flex';

    // tombol
    document.getElementById('admin-btn').style.display = 'flex';

    document.getElementById('music-btn').style.display = 'flex';

    // play music
    if (backsound) {
        backsound.play().catch(() => {
            console.log("Autoplay diblok browser");
        });
    }

}


// ==========================
// HITUNG DURASI
// ==========================

function hitungDurasiJadian() {

   ...

   let teks = "";

   if (bulan === 1 && hari === 0) {

    teks = "1 bulan sama kamu ternyata bikin candu juga 💖";

} else if (bulan === 2 && hari === 0) {

    teks = "2 bulan bertahan sama kelakuan kita masing-masing. Prestasi 🗿";

} else if (bulan === 3 && hari === 0) {

    teks = "3 bulan penuh drama, ketawa, dan rasa sayang ❤️";

} else if (bulan === 4 && hari === 0) {

    teks = "4 bulan dan aku masih milih kamu tiap hari 💕";

} else if (bulan === 5 && hari === 0) {

    teks = "5 bulan bareng manusia favoritku 🥹";

} else if (bulan === 6 && hari === 0) {

    teks = "Happy 6 Month Sayang 💖";

} else if (bulan === 7 && hari === 0) {

    teks = "7 bulan dan masih belum bosen liat muka kamu 😌";

} else if (bulan === 8 && hari === 0) {

    teks = "8 bulan. Hubungan kita udah kayak subscription premium, lanjut terus.";

} else if (bulan === 9 && hari === 0) {

    teks = "9 bulan bersama. Lucu juga ya kita bisa sejauh ini ❤️";

} else if (bulan === 10 && hari === 0) {

    teks = "10 bulan penuh cerita random tapi berharga 💫";

} else if (bulan === 11 && hari === 0) {

    teks = "11 bulan dan bentar lagi officially setahun 🥹";

} else if (bulan === 12 && hari === 0) {

    teks = "🎉 HAPPY 1 YEAR ANNIVERSARY SAYANG ❤️";

} else if (bulan === 18 && hari === 0) {

    teks = "1 Tahun 6 Bulan sama manusia paling nyebelin tapi paling aku sayang 🥹";

} else if (bulan === 24 && hari === 0) {

    teks = "🎉 HAPPY 2 YEARS ❤️ Masih kuat juga kita ya.";

} else if (bulan === 36 && hari === 0) {

    teks = "3 tahun bareng. Kita udah kayak paket bundle kehidupan 😭";

} else if (bulan === 48 && hari === 0) {

    teks = "4 tahun dan aku masih pengen cerita semuanya ke kamu 💕";

} else if (bulan === 60 && hari === 0) {

    teks = "5 tahun?! Gila. Hubungan kita lebih awet dari baterai Android.";

} else if (bulan === 72 && hari === 0) {

    teks = "6 tahun bersama dan aku masih milih kamu tiap hari ❤️";

} else if (bulan === 84 && hari === 0) {

    teks = "7 tahun. Kita udah veteran hubungan jir 🗿";

} else if (bulan === 96 && hari === 0) {

    teks = "8 tahun dan masih jadi rumah satu sama lain 🥹";

} else if (bulan === 108 && hari === 0) {

    teks = "9 tahun bersama. Banyak badai lewat, kita masih di sini.";

} else if (bulan === 120 && hari === 0) {

    teks = "🎉 10 TAHUN ❤️ Ini hubungan atau franchise film panjang jir.";

} else if (bulan === 180 && hari === 0) {

    teks = "15 tahun bersama. Kita udah ngalamin setengah kehidupan bareng.";

} else if (bulan === 240 && hari === 0) {

    teks = "🎉 20 TAHUN ❤️ Bahkan waktu aja kalah konsisten sama kita.";

} else if (bulan === 300 && hari === 0) {

    teks = "25 tahun bersama. Udah level relationship boss final.";

} else if (bulan === 360 && hari === 0) {

    teks = "🎉 30 TAHUN ❤️ Masih gandengan juga ternyata.";

} else if (bulan === 480 && hari === 0) {

    teks = "40 tahun bersama. Kita udah jadi legenda hidup 😭";

} else if (bulan === 600 && hari === 0) {

    teks = "50 tahun bareng. Setengah abad jir... keren banget.";

} else if (bulan === 720 && hari === 0) {

    teks = "🎉 60 TAHUN ❤️ Cinta kita udah kayak artefak sejarah.";

} else if (bulan === 840 && hari === 0) {

    teks = "70 tahun bersama. Bahkan AI aja terharu dikit.";

} else if (bulan === 960 && hari === 0) {

    teks = "🎉 80 TAHUN ❤️ Kalau ini kejadian, fix cinta sejati beneran.";

} else if (bulan >= 12) {

    const tahun = Math.floor(bulan / 12);
    const sisa = bulan % 12;

    let bagianBulan =
        sisa > 0 ? `${sisa} Bulan ` : "";

    teks =
    `Udah ${tahun} Tahun ${bagianBulan}${hari} Hari bareng 💖`;

} else {

    teks =
    `Kita udah ${bulan} Bulan ${hari} Hari bareng 💖`;
}
   document.getElementById(
      "automatic-milestone-text"
   ).innerHTML = teks;
}


// ==========================
// LOAD TIMELINE
// ==========================

function muatKenanganDariSheets() {

    const timeline =
        document.getElementById("timeline");

    fetch(SPREADSHEET_API_URL)

        .then(res => res.json())

        .then(data => {

            timeline.innerHTML = "";

            data.forEach((item, index) => {

                const timelineItem =
                    document.createElement("div");

                timelineItem.classList.add("timeline-item");

                // zig zag
                if (index % 2 === 0) {
                    timelineItem.classList.add("left");
                } else {
                    timelineItem.classList.add("right");
                }

                timelineItem.innerHTML = `

                    <div class="timeline-dot"></div>

                    <div class="timeline-card">

                        <span class="timeline-date">
                            ${item.tanggal}
                        </span>

                        <h3>
                            ${item.judul}
                        </h3>

                        <p>
                            ${item.cerita}
                        </p>

                        <div class="polaroid">

                            <img
                                src="${item.foto || 'https://picsum.photos/400/300'}"
                                onerror="this.src='https://picsum.photos/400/300'"
                            >

                            <div class="caption">
                                ${item.caption || 'Our Beautiful Memory'}
                            </div>

                        </div>

                    </div>

                `;

                timeline.appendChild(timelineItem);

            });

            aktifkanScrollObserver();

        })

        .catch(err => {
            console.error(err);
        });
}


// ==========================
// SCROLL ANIMATION
// ==========================

function aktifkanScrollObserver() {

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        }, {
            threshold: 0.15
        });

    document
        .querySelectorAll(".timeline-card")
        .forEach(card => observer.observe(card));

    const finalCard =
        document.getElementById("final-card");

    if (finalCard) {
        observer.observe(finalCard);
    }
}


// ==========================
// MUSIC
// ==========================

function toggleMusic() {

    if (backsound.paused) {

        backsound.play();

        musicIcon.innerHTML = "🎵";

    } else {

        backsound.pause();

        musicIcon.innerHTML = "▶";
    }
}


// ==========================
// SCROLL KE TIMELINE
// ==========================

function scrollToTimeline() {

    document
        .getElementById("timeline")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==========================
// TOMBOL NGGAK KABUR
// ==========================

function hindarTombol() {

    const btn =
        document.getElementById("btn-no");

    const x =
        (Math.random() - 0.5) * 300;

    const y =
        (Math.random() - 0.5) * 120;

    btn.style.transform =
        `translate(${x}px, ${y}px)`;
}


// ==========================
// TOMBOL MAU
// ==========================

function jawabYa() {

    showCustomAlert(
    "Aaaaaa 💖 Aku juga mau terus sama kamu!"
);

    const container =
        document.getElementById("hearts-container");

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.classList.add("floating-heart");

            heart.innerHTML =
                '<i class="fa-solid fa-heart"></i>';

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (Math.random() * 2 + 1) + "rem";

            heart.style.animationDuration =
                (Math.random() * 2 + 2) + "s";

            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);

        }, i * 100);
    }
}


// ==========================
// ADMIN PANEL
// ==========================

function toggleAdminPanel() {

    const panel =
        document.getElementById("admin-panel");

    if (
        panel.style.display === "none" ||
        panel.style.display === ""
    ) {

        panel.style.display = "block";

    } else {

        panel.style.display = "none";
    }
}


// ==========================
// SIMPAN DATA
// ==========================

function kirimKeSheets() {

    const tanggal =
        document.getElementById("inputTanggal").value;

    const judul =
        document.getElementById("inputJudul").value;

    const cerita =
        document.getElementById("inputCerita").value;

    const foto =
        document.getElementById("inputFoto").value;

    if (!tanggal || !judul || !cerita) {

        alert("Isi dulu semua datanya 🗿");

        return;
    }

    console.log({
        tanggal,
        judul,
        cerita,
        foto
    });

    alert("Kenangan berhasil disimpan ❤️");

    toggleAdminPanel();
}


// ==========================
// EFEK HATI
// ==========================

function mulaiEfekHati() {

    const container =
        document.getElementById("hearts-container");

    if (!container) return;

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.classList.add("floating-heart");

        heart.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (Math.random() * 1.5 + 0.5) + "rem";

        const duration =
            Math.random() * 4 + 4;

        heart.style.animationDuration =
            duration + "s";

        heart.style.opacity =
            Math.random() * 0.6 + 0.3;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);

    }, 500);
}
function showCustomAlert(message){

    document.getElementById(
        "custom-alert-text"
    ).innerText = message;

    document.getElementById(
        "custom-alert"
    ).style.display = "flex";
}

function closeCustomAlert(){

    document.getElementById(
        "custom-alert"
    ).style.display = "none";
}
