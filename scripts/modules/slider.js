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
    swiperEl.addEventListener('touchstart', () => {
        swiper.autoplay.stop();
    });
    swiperEl.addEventListener('touchend', () => {
        setTimeout(() => {
            swiper.autoplay.start();
        }, 6000);
    });
    const bookName = ".swiper-slide__item__name";
    const bookDescription = '.swiper-slide__item-description';
    const bookImage = '.slide-book-img';
    
    function bookFilling(el, book, name, description, image) {
        el.querySelector(name).textContent = book.name
        el.querySelector(description).textContent = book.description
        el.querySelector(image).src = book.img
    }

    fetch('http://localhost/ElectronicLibrary/librex/config/database.php')
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            let books = data.data;
            let arrRandomChecker = new Map;
            let randomize = 0;
            swiperCollection.forEach(el => {
                do {
                    randomize = Math.floor(Math.random() * books.length)
                }
                while (arrRandomChecker.has(randomize))
                arrRandomChecker.set(randomize)
                let book = books[randomize]
                console.log(book.img);

                bookFilling(el, book, bookName, bookDescription, bookImage)

                el.querySelector('a').addEventListener('click', () => {
                    function localSet(key, meaning) {
                        localStorage.setItem(key, meaning)
                    }
                    console.log(typeof book.name);
    
                    console.log(book.name);
                    
                    localSet("name", book.name)
                    localSet('description', book.description)
                    localSet('author', book.author_name)
                    localSet('img',book.img)
                })
            }
            )
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
    return swiper
}

const slider = initSwiper()
export default slider
