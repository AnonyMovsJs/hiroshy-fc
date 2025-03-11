document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("spiderman-music");

    // Intentar reproducir la música automáticamente
    const playMusic = () => {
        audio.play().catch(() => {
            document.addEventListener("click", () => audio.play(), { once: true });
        });
    };

    playMusic();
});
