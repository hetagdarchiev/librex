const init = () => {
    fetch('http://localhost/ElectronicLibrary/librex/config/database.php')
        .then(response => response.json())
        .then(data => {
            const books = data.data;
            console.log(books);
            const booksGroup = document.querySelector('.catalog__group')
            const btn = document.querySelector(".catalog__filters__button")
            books.forEach((book) => {
                booksGroup.innerHTML += `
                <a href="./product.html" class="catalog__item">
                <div class="catalog__item__wrapper">
                <img src="${book.img || './assets/images/oblojka.jpg'}" class="catalog__item__img" alt="${book.title}">
                </div>
                <h4 class="catalog__item__title">${book.name || 'Текст'}</h4>
                <span class="book-id" style="display:none">${book.id}</span>
                <span class="book-genre" style="display:none">${book.genre_name}</span>
                <span class="book-author" style="display:none">${book.author_name}</span>
                <span class="book-description" style="display:none">${book.description}</span>
                </a>
                `;
            });
            const booksPage = booksGroup.querySelectorAll('.catalog__item')
            booksPage.forEach(el => {
                let title = el.querySelector('.catalog__item__title')
                let imageBbook = el.querySelector('.catalog__item__img')
                let genre = el.querySelector('.book-genre')
                let author = el.querySelector('.book-author')
                let description = el.querySelector('.book-description')
                console.log(imageBbook.src);

                el.addEventListener('click', (event) => {
                    localStorage.setItem('name', title.textContent)
                    localStorage.setItem('img', imageBbook.src)
                    localStorage.setItem('genre', genre.textContent)
                    localStorage.setItem('author', author.textContent)
                    localStorage.setItem('description', description.textContent)
                })
            }
            )

            btn.addEventListener('click', (e) => {
                e.preventDefault
            })



            initDropdowns(books);
            initCustomDropdowns();
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
};

const initDropdowns = (books) => {
    const dropdownConfig = [
        {
            selector: '.catalog__filters-authors',
            property: 'author_name',
            nativeId: 'authors'
        },
        {
            selector: '.catalog__filters-genres',
            property: 'genre_name',
            nativeId: 'genres'
        }
    ];

    dropdownConfig.forEach(config => {
        const dropdown = document.querySelector(`${config.selector} .custom-dropdown`);
        const nativeSelect = document.querySelector(`#${config.nativeId}`);
        const optionsContainer = dropdown.querySelector('.dropdown__options');

        nativeSelect.innerHTML = '<option value="null"></option>';
        optionsContainer.innerHTML = '<li class="dropdown__option" data-value="null">Не выбран</li>';

        const uniqueValues = [...new Set(books.map(book => book[config.property]))];

        uniqueValues.forEach(value => {
            nativeSelect.innerHTML += `<option value="${value}">${value}</option>`;
            optionsContainer.innerHTML += `<li class="dropdown__option" data-value="${value}">${value}</li>`;
        });
    });
};

const initCustomDropdowns = () => {
    const dropdowns = document.querySelectorAll('.custom-dropdown');

    const handleDropdownToggle = (dropdown, e) => {
        e.stopPropagation();
        const toggle = dropdown.querySelector('[data-dropdown-toggle]');
        const options = dropdown.querySelector('.dropdown__options');
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.querySelector('[data-dropdown-toggle]').setAttribute('aria-expanded', 'false');
                d.querySelector('.dropdown__options').setAttribute('aria-hidden', 'true');
            }
        });

        toggle.setAttribute('aria-expanded', !isExpanded);
        options.setAttribute('aria-hidden', isExpanded);
    };

    const handleOptionClick = (dropdown, option) => {
        const value = option.getAttribute('data-value');
        const text = option.textContent;
        const placeholder = dropdown.querySelector('.dropdown__placeholder');
        const nativeSelect = dropdown.querySelector('.dropdown__native-select');
        const toggle = dropdown.querySelector('[data-dropdown-toggle]');
        const options = dropdown.querySelector('.dropdown__options');

        placeholder.textContent = text;
        nativeSelect.value = value;
        toggle.setAttribute('aria-expanded', 'false');
        options.setAttribute('aria-hidden', 'true');
    };

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('[data-dropdown-toggle]');
        toggle.addEventListener('click', (e) => handleDropdownToggle(dropdown, e));

        dropdown.querySelectorAll('.dropdown__option').forEach(option => {
            option.addEventListener('click', () => handleOptionClick(dropdown, option));
        });
    });

    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('[data-dropdown-toggle]').setAttribute('aria-expanded', 'false');
            dropdown.querySelector('.dropdown__options').setAttribute('aria-hidden', 'true');
        });
    });
};

const initialization = init();
export default initialization;