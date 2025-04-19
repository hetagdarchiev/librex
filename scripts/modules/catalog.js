let init = () => {
    fetch('http://localhost/ElectronicLibrary/librex/config/database.php')
        .then(response => response.json())
        .then(data => {
            let books = data.data;
            console.log(books);
            const authorsDropdown = document.querySelector('.catalog__filters-authors .custom-dropdown');
            const genresDropdown = document.querySelector('.catalog__filters-genres .custom-dropdown');
            const nativeAuthorsSelect = document.querySelector('#authors');
            const nativeGenresSelect = document.querySelector('#genres');
            nativeAuthorsSelect.innerHTML = '<option value="null"></option>';
            nativeGenresSelect.innerHTML = '<option value="null"></option>';
            authorsDropdown.querySelector('.dropdown__options').innerHTML = '<li class="dropdown__option" data-value="null">Не выбран</li>';
            genresDropdown.querySelector('.dropdown__options').innerHTML = '<li class="dropdown__option" data-value="null">Не выбран</li>';
            let authorChecker = new Set();
            let genresChecker = new Set();
            let totalYears = 0;
            books.forEach(element => {
                authorChecker.add(element.author_name);
                genresChecker.add(element.genre_name);
                totalYears += element.year;
            });
            console.log('Средний год:', Math.round(totalYears / books.length));
            authorChecker.forEach(author => {
                nativeAuthorsSelect.innerHTML += `<option value="${author}">${author}</option>`;
                authorsDropdown.querySelector('.dropdown__options').innerHTML += `
                    <li class="dropdown__option" data-value="${author}">${author}</li>
                `;
            });
            genresChecker.forEach(genre => {
                nativeGenresSelect.innerHTML += `<option value="${genre}">${genre}</option>`;
                genresDropdown.querySelector('.dropdown__options').innerHTML += `
                    <li class="dropdown__option" data-value="${genre}">${genre}</li>
                `;
            });
            initCustomDropdowns();
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
};


const initCustomDropdowns = () => {
    document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
        const toggle = dropdown.querySelector('[data-dropdown-toggle]');
        const options = dropdown.querySelector('.dropdown__options');
        const nativeSelect = dropdown.querySelector('.dropdown__native-select');
        const placeholder = dropdown.querySelector('.dropdown__placeholder');
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            document.querySelectorAll('.custom-dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.querySelector('[data-dropdown-toggle]').setAttribute('aria-expanded', 'false');
                    d.querySelector('.dropdown__options').setAttribute('aria-hidden', 'true');
                }
            });
            toggle.setAttribute('aria-expanded', !isExpanded);
            options.setAttribute('aria-hidden', isExpanded);
        });
        dropdown.querySelectorAll('.dropdown__option').forEach(option => {
            option.addEventListener('click', () => {
                const value = option.getAttribute('data-value');
                const text = option.textContent;
                placeholder.textContent = text;
                nativeSelect.value = value;
                toggle.setAttribute('aria-expanded', 'false');
                options.setAttribute('aria-hidden', 'true');
            });
        });
    });
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
            dropdown.querySelector('[data-dropdown-toggle]').setAttribute('aria-expanded', 'false');
            dropdown.querySelector('.dropdown__options').setAttribute('aria-hidden', 'true');
        });
    });
};

let initialization = init();

export default initialization