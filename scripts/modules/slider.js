let initSwiper = () => {
    const swiper = new Swiper('.swiper', {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
            dynamicBullets: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        loop: true,
    });

    let swiperEl = document.querySelector(".swiper-wrapper")
    swiperEl.addEventListener('touchstart', () => {
        swiper.autoplay.stop();
    });
    swiperEl.addEventListener('touchend', () => {
        setTimeout(() => {
            swiper.autoplay.start();
        }, 6000);
    });

    return swiper
}

const slider = initSwiper()
export default slider
