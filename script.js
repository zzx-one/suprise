// ==========================
// KONFIGURASI
// ==========================

const SPREADSHEET_API_URL =
"https://script.google.com/macros/s/AKfycbx9lqOllkIGhF81KxHJ0UdOqGngObi1K3P3H3gmi-DfM281VcJc5l2kd7EO_e8RzsNfSg/exec";

const TANGGAL_JADIAN = "2025-07-20";

const AUTH_USER_HASH =
"f509e754cda93d287cd0857df4555f962976ba21463b401f36013ed6282603e2";

const AUTH_PASS_HASH =
"c922e2b0d16a99fac04b5069b36c983695b13fd8f2141c51c12f8c41d1a2d61b";


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

    const mulai = new Date(TANGGAL_JADIAN);
    const sekarang = new Date();

    let bulan =
        (sekarang.getFullYear() - mulai.getFullYear()) * 12;

    bulan += sekarang.getMonth() - mulai.getMonth();

    if (sekarang.getDate() < mulai.getDate()) {
        bulan--;
    }

    const target = new Date(
        mulai.getFullYear(),
        mulai.getMonth() + bulan,
        mulai.getDate()
    );

    const selisih =
        sekarang - target;

    const hari = Math.floor(
        selisih / (1000 * 60 * 60 * 24)
    );

    let teks = "";

    if (bulan >= 12) {

        const tahun = Math.floor(bulan / 12);
        const sisa = bulan % 12;

        teks =
        `Udah ${tahun} Tahun ${sisa} Bulan ${hari} Hari bareng 💖`;

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