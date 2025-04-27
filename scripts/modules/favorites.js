let init = () => {
    let fillingSection = document.querySelector('.favorites__group')
    let obj = JSON.parse(localStorage.favorites)
    console.log(obj);

    for (let i in obj) {
        fillingSection.innerHTML += `
        <div class="favorites__wrapper">
        <a href="./product.html" class="favorites__item">
        <div class="favorites__image-wrapper">
          <img src="${obj[i].img}" alt="" class="favorites__image"/>
        </div>
        <div class="favorites__content">
          <h3 class="favorites__title">${obj[i].name}</h3>
          <p class="favorites__description">
            ${obj[i].description}
          </p>
        </div>
        <span style="display:none;" class = "identifier">${obj[i].id}</span>
        <span style="display:none;" class = "author">${obj[i].author}</span>
        <span style="display:none;" class = "genre">${obj[i].genre}</span>
      </a>
      <button class="favorites__button">X</button></div>`
    }
    let buttons = fillingSection.querySelectorAll('.favorites__button')

    if (localStorage.getItem("favorites") === "{}") {
        localStorage.removeItem("favorites");
    }
    buttons.forEach(el => {
        el.addEventListener('click', (e) => {
            let item = el.parentElement.querySelector('.favorites__item')
            let id = item.querySelector('.identifier').innerHTML;
            const updatedFavorites = {};
            for (let key in obj) {
                if (obj[key].id !== id) {
                    updatedFavorites[key] = obj[key];
                }
            }
            localStorage.favorites = JSON.stringify(updatedFavorites)
            location.reload();
        })
    }
    )
    let items = fillingSection.querySelectorAll('.favorites__item')
    items.forEach(element => {
        element.addEventListener('click', (e) => {
            localStorage.setItem('name', element.querySelector('.favorites__title').textContent)
            localStorage.setItem('description', element.querySelector('.favorites__description').textContent)
            localStorage.setItem('img', element.querySelector('.favorites__image').src)
            localStorage.setItem('author', element.querySelector('.author').textContent)
            localStorage.setItem('genre', element.querySelector('.genre').textContent)
            localStorage.setItem('id', element.querySelector('.identifier').textContent)
        })
    });
}

const initialization = init();
export default initialization;