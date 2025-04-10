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
            clickable: false,
            dynamicBullets: true,
            type: 'bullets',
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

    fetch('http://localhost/ElectronicLibrary/librex/config/database.php')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let swiperCollection = document.querySelectorAll(".swiper-slide");
            let collection = new Map
            swiperCollection.forEach((el, index) => {
                let random;
                do {
                    random = Math.floor(Math.random() * data.length);
                } while (collection.has(random));

                collection.set(random, true);
                let book = data[random]

                el.querySelector(".swiper-slide__item__name").textContent = book.name
                el.querySelector('.swiper-slide__item-description').textContent = book.description
                el.querySelector('.slide-book-img').src = book.book_img
            })
        }
        );
    return swiper
}

const slider = initSwiper()
export default slider
