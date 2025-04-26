let init = () => {

    let btn = document.querySelectorAll('.tabs__control')
    let tabs = document.querySelectorAll('.tabs__panel')
    console.log(tabs);
    function removeActiveClass(element) {
        element.forEach(el => {
            el.classList.remove('active')
        }
        )
    }
    btn.forEach((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault
            removeActiveClass(tabs)
            tabs[index].classList.add('active')
        })
    })
    fetch('http://localhost/ElectronicLibrary/librex/config/database.php')
        .then(data => data.json())
        .then(data => {
            let lastItems = data.data.slice(-5).reverse()
            console.log(lastItems);

            let newsBook = document.querySelectorAll('.news-book__item')
            newsBook.forEach((element, index) => {
                let book = lastItems[index];
                element.querySelector('img').src = book.img
                element.querySelector('h4').textContent = book.name
                element.innerHTML += `
    <span class="id" style="display:none;">${book.id}</span>  
    <span class="genre" style="display:none;">${book.genre_name}</span>
    <span class="author" style="display:none;">${book.author_name}</span>
    <span class="description" style="display:none;">${book.description}</span>
`;
            });
        }
        )
}
let tabs = init()
export default tabs;