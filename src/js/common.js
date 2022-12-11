document.addEventListener("DOMContentLoaded", function () {
    // loader
    setTimeout(function () {
        anim();
    }, 400);
});

function anim() {
    // init controller
    let controller = new ScrollMagic.Controller();
    // SLIDER FIXED
    let numb1 = anime({
        targets: '.slider-numb-1',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 300,
        autoplay: false,
        easing: 'linear',
    });
    let numb2 = anime({
        targets: '.slider-numb-2',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 300,
        autoplay: false,
        easing: 'linear',
    });
    let mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        effect: 'fade',
        noSwiping: false,
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletElement: 'span',
            clickable: true,
            bulletClass: 'pagination',
            bulletActiveClass: 'pagination-active',
            clickable: false,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        on: {
            init: function () {
                document.querySelector('.slider-numb-1').textContent = '0';
                document.querySelector('.slider-numb-2').textContent = this.activeIndex + 1;
            },
            slideChange: function () {
                document.querySelector('.slider-numb-2').textContent = this.activeIndex + 1;
                numb1.play();
                numb2.play();
            },
        },
    });

    let circleSvg = anime({
        targets: '#slider-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
    });


    //    let scene9 = gsap.to(".box", {
    //        duration: 3000,
    //        scrollTrigger: {
    //            scrollTrigger: {
    //            trigger: ".features",
    //            start: "top top",
    //            pin: true,
    //            pinSpacing: false
    //        }
    //    });

    let scene9 = new ScrollMagic.Scene({
            triggerElement: ".features",
            duration: 3000,
            triggerHook: 0
        })
        .setAnime(circleSvg)
        .setPin(".features .inner-box")
        .addTo(controller);

    let targetSlider = document.querySelector('.features__slider');
    let pagList = document.querySelectorAll('.pagination');




    scene9.on("progress", function (event) {
        if (event.scrollDirection === 'FORWARD') {
            if (event.progress <= 0.33) {
                mySwiper.slideTo(0);
                pagList[0].classList.add('active');
            } else if (event.progress <= 0.5) {
                mySwiper.slideTo(1);
                pagList[1].classList.add('active');
            } else if (event.progress <= 0.66) {
                mySwiper.slideTo(2);
                pagList[2].classList.add('active');
            } else {
                mySwiper.slideTo(3);
                pagList[3].classList.add('active');
            }
        }
        if (event.scrollDirection === 'REVERSE') {
            if (event.progress >= 0.66) {
                mySwiper.slideTo(3);
            } else if (event.progress >= 0.5) {
                mySwiper.slideTo(2);
                pagList[3].classList.remove('active');
            } else if (event.progress >= 0.33) {
                mySwiper.slideTo(1);
                pagList[2].classList.remove('active');
            } else {
                mySwiper.slideTo(0);
                pagList[1].classList.remove('active');
            }
        }
        if (event.state === 'BEFORE') {
            pagList[0].classList.remove('active');
        }

    });
    scene9.on("start", function (event) {
        if (event.progress <= 0.33) {
            pagList[0].classList.add('active');
        } else if (event.progress <= 0.5) {
            pagList[0].classList.add('active');
            pagList[1].classList.add('active');
        } else if (event.progress <= 0.66) {
            pagList[0].classList.add('active');
            pagList[1].classList.add('active');
            pagList[2].classList.add('active');
        } else {
            pagList[0].classList.add('active');
            pagList[1].classList.add('active');
            pagList[2].classList.add('active');
            pagList[3].classList.add('active');
        }
    });
}