/**
 * ==========================================
 * (Variables & Songs)
 * ==========================================
 */

const themeSongs = {
    'Description_Theme1.html': '../Sound/WatChai.mp3',
    'Description_Theme2.html': '../Sound/throne-hall.mp3',
    'Description_Theme3.html': '../Sound/mahanakhon.mp3',
    'Secret_Place_Theme.html': '../Sound/wat-arun.mp3',
    'EndPage.html': '../Sound/Win-game.mp3',
    'Bag.html': '../Sound/inventory-bgm.mp3',
    'Ticket.html': '../Sound/shop-bgm.mp3',
};

/**
 * ==========================================
 * (Core Functions)
 * ==========================================
 */

function initThemeMusic() {
    const audioPlayer = document.getElementById('theme-bg-music');
    if (!audioPlayer) return;

    const path = window.location.pathname;
    const currentPage = path.split('/').pop();
    const songPath = themeSongs[currentPage];

    if (songPath) {
        audioPlayer.src = songPath;
        audioPlayer.volume = 0.4;
        audioPlayer.loop = true;

        window.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play().catch(err => console.log("Music Autoplay Blocked:", err));
            }
        }, { once: true });
    }
}

function toggleMusic() {
    const audioPlayer = document.getElementById('theme-bg-music');
    const musicBtn = document.getElementById('music-toggle');
    
    if (!audioPlayer) return;

    if (audioPlayer.paused) {
        audioPlayer.play();
        if (musicBtn) musicBtn.classList.remove('muted');
        console.log("Music Resumed");
    } else {
        audioPlayer.pause();
        if (musicBtn) musicBtn.classList.add('muted');
        console.log("Music Muted");
    }
}

/**
 * ==========================================
 * (Initialization)
 * ==========================================
 */

window.addEventListener('DOMContentLoaded', initThemeMusic);