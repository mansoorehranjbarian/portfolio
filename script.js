
/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});


/* بستن منو بعد از کلیک */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* =========================================
   VIDEO MODAL
========================================= */

const videoModal = document.getElementById("videoModal");
const studentVideo = document.getElementById("studentVideo");


function openVideo(videoPath) {

    studentVideo.src = videoPath;

    videoModal.classList.add("active");

    studentVideo.play();

}


function closeVideo() {

    studentVideo.pause();

    studentVideo.currentTime = 0;

    studentVideo.src = "";

    videoModal.classList.remove("active");

}


/* بستن با کلیک روی فضای بیرون */

videoModal.addEventListener("click", (event) => {

    if (event.target === videoModal) {

        closeVideo();

    }

});


/* بستن با ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeVideo();

    }

});
