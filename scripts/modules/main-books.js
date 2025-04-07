
fetch('https://openlibrary.org/search.json?q=harry+potter&limit=9')
    .then(response => response.json())
    .then(data => {
      const books = data.docs;
      const slides = document.querySelectorAll('.swiper-slide');
    })