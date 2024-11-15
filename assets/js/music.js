const audio = document.getElementById('background-music');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

// Fungsi untuk Play
function playMusic() {
    audio.play().then(() => {
        // Musik mulai diputar
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    }).catch(error => {
        // Autoplay mungkin diblokir, atau error lainnya
        console.log("Autoplay mungkin diblokir oleh browser: ", error);
    });
}

// Fungsi untuk Pause
function pauseMusic() {
    audio.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

// Event listener untuk tombol Play dan Pause
playBtn.addEventListener('click', playMusic);
pauseBtn.addEventListener('click', pauseMusic);

// Memulai musik saat halaman pertama kali dimuat
window.addEventListener('load', () => {
    // Browser mungkin memerlukan interaksi pengguna untuk memutar musik
    playMusic();
});
