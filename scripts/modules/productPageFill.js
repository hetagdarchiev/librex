let init = () => {
    // получаем элементы из страницы
    let author = document.querySelector('.product__author')
    let name = document.querySelector('.product__title')
    let description = document.querySelector('.product__description')
    let img = document.querySelector('.product__image')
    let genre = document.querySelector('.product__genre')
    
    // получаем данные из хранилища и обновляем содержимое элементов
    let authorName = localStorage.getItem("author")
    let bookName = localStorage.getItem('name')
    let descriptionValue = localStorage.getItem('description')
    let image = localStorage.getItem('img')
    let genreName = localStorage.getItem('genre')
    let bookId = localStorage.getItem('id')
    
    author.textContent += authorName
    name.textContent = bookName
    description.textContent = descriptionValue
    img.src = image
    genre.textContent += genreName
    document.title = bookName
    
    let btn = document.querySelector('.product__button--like')
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // В момент клика заново получаем текущие данные
        let currentBook = {
            "id": localStorage.getItem('id'),
            "name": localStorage.getItem('name'),
            "author": localStorage.getItem('author'),
            "description": localStorage.getItem('description'),
            "img": localStorage.getItem('img'),
            "genre": localStorage.getItem('genre'),
            'time': Date.now(),
        }
        
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyAdded = favorites.some(item => item.id === currentBook.id);
        
        if (!isAlreadyAdded) {
            favorites.push(currentBook);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert('Книга добавлена в избранное!');
        } else {
            alert('Эта книга уже в избранном!');
        }
    });
}

let initialization = init();
export default initialization
