var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    mousewheel: true,
    loop: false,
    grabCursor: true,

    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
});

//音乐图标效果
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