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