const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = 'Pause Music';
    } else {
        backgroundMusic.pause();
        musicToggle.textContent = 'Play Music';
    }
});

const profilePicture = document.getElementById('profile-picture');
const modal = document.getElementById('image-modal');

profilePicture.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.getElementsByClassName("profile-container").style.opacity = '0.5';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.getElementsByClassName("profile-container").style.opacity = '1';
    }
});