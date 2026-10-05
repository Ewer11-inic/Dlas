const audio = document.getElementById("audio");
const play = document.getElementById("play");

play.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
        play.textContent = "❚❚";
    } else {
        audio.pause();
        play.textContent = "▶";
    }

});
