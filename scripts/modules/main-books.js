let init = () => {
  fetch('https://openlibrary.org/search.json?q=language=ru')
    .then(response => response.json())
    .then(data => {
      const books = data.docs;
      const slides = document.querySelectorAll('.swiper-slide');

      slides.forEach((element) => {
        let randomIndex, book;
        let isValidBook = false;
        while (!isValidBook) {
          randomIndex = Math.floor(Math.random() * 100);
          book = books[randomIndex];
          isValidBook =
            book &&
            book.cover_i !== undefined &&
            book.title &&
            book.author_name &&
            book.author_name.length > 0 &&
            book.language.includes("rus")
        }
        let link = element.querySelector('.swiper-slide__item__read-link');
        let img = element.querySelector('.slide-book-img');
        let name = element.querySelector('.swiper-slide__item__name');
        let author = element.querySelector('.swiper-slide__item-author');

        if (link && book.key) {
          link.href = `https://openlibrary.org/${book.key}`;
          link.target = "_blank"
        }

        if (img) {
          img.src = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'assets/images/128_rus.jpg';
        }

        if (name && book.title) {
          name.textContent = book.title;
        }

        if (author && book.author_name && book.author_name.length > 0) {
          author.textContent = "Автор: " + book.author_name[0];
        }
      });
    }); 
};

export default init()