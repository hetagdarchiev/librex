let init = () => {
    // получаем элементы из страницы
    let author = document.querySelector('.product__author')
    let name = document.querySelector('.product__title')
    let description = document.querySelector('.product__description')
    let img = document.querySelector('.product__image')
    let genre = document.querySelector('.product__genre')
    
    // получаем данные из хранилища
    let authorName = localStorage.getItem("author")
    let bookName = localStorage.getItem('name')
    let descriptionValue = localStorage.getItem('description')
    let image = localStorage.getItem('img')
    let genreName = localStorage.getItem('genre')
    let bookId = localStorage.getItem('id')
    
    // меняем содержимое элементов
    author.textContent += authorName
    name.textContent = bookName
    description.textContent = descriptionValue
    img.src = image
    genre.textContent += genreName
    
    let btn = document.querySelector('.product__button--like')
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let book = {
            "id": bookId,
            "name": bookName,
            "author": authorName,
            "description": descriptionValue,
            "img": image,
            "genre": genreName,
            'time': Date.now(),
        }
        
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyAdded = favorites.some(fav => fav.id === bookId);
        
        if (!isAlreadyAdded) {
            favorites.push(book);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            
            alert('Книга добавлена в избранное!');
        } else {
            alert('Эта книга уже в избранном!');
        }
    });
    
    document.title = localStorage.getItem('name')
}

let initialization = init();
export default initialization
