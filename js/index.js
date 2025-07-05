var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    loop: false,
    grabCursor: true,

    on:{
        init: function(){
            swiperAnimateCache(this); // Hide animated elements
            swiperAnimate(this); // Initialization completes the start animation
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); // The current slide animation is also run at the end of each slide toggle
        }
    },
});

// Music Icon Effect
var music = document.getElementById("music");
var musicIg = document.querySelectorAll(".musicIg")[0];
var musicImg = document.querySelectorAll(".musicImg")[0];
var audio = document.querySelector("audio");
var flag = 1;
music.onclick = function () {
    if (flag == 1) {
        musicImg.style.display = "none";
        musicIg.style.animation = "none";
        audio.pause();
        flag = 0;
    }
    else {
        musicImg.style.display = "block";
        musicIg.style.animation = " turn 6s infinite linear";
        audio.play();
        flag = 1;
    }
};