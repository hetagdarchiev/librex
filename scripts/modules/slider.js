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
    let swiperCollection = document.querySelectorAll(".swiper-slide");
    const bookName = ".swiper-slide__item__name";
    const bookDescription = '.swiper-slide__item-description';
    const bookImage = '.slide-book-img';

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
            if (data.success && data.data && Array.isArray(data.data)) {
                let collection = new Map();
                const books = data.data;
                swiperCollection.forEach((el, index) => {
                    let random;
                    do {
                        random = Math.floor(Math.random() * books.length);
                        if (collection.size >= books.length) {
                            collection.clear();
                        }
                    } while (collection.has(random));
                    collection.set(random, true);
                    let book = books[random];
                    el.querySelector(bookName).textContent = book.name;
                    el.querySelector(bookDescription).textContent = book.description;
                    el.querySelector(bookImage).src = book.book_img;
                });
            } else {
                throw new Error('Invalid data structure');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            swiperCollection.forEach((el) => {
                const nameEl = el.querySelector(bookName);
                const descEl = el.querySelector(bookDescription);
                const imgEl = el.querySelector(bookImage);

                if (nameEl) nameEl.textContent = "Книга не найдена";
                if (descEl) descEl.textContent = " ";
                if (imgEl) imgEl.src = '';
            });
        });

    swiperCollection.forEach(el => {
        el.querySelector('a').addEventListener('click', () => {
            function localSet(key, meaning) {
                localStorage.setItem(key, el.querySelector(meaning).textContent)
            }
            localSet("name", bookName)
            localSet('description', bookDescription)
            localSet('')
        })
    }
    )
    return swiper
}

const slider = initSwiper()
export default slider
