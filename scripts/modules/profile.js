let init = () => {
    try {
        if (localStorage.getItem('userLogin')) {
            document.querySelector('.forms__wrapper').classList.remove('active')
            document.querySelector('.profile__wrapper').classList.add('active')
        }
        else {
            document.querySelector('.forms__wrapper').classList.add('active')
            document.querySelector('.profile__wrapper').classList.remove('active')
        }
    } catch (error) {
        console.log(error);
    }
    fetch('/ElectronicLibrary/librex/php/profile-base/data.json')
        .then(response => response.json())
        .then(data => {
            const btn = document.querySelector('.entry__button')
            console.log(data);
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const password = document.querySelector('.entry__password').value;
                const email = document.querySelector('.entry__email').value;
                data.forEach(element => {
                    if (element.email === email
                        && element.password === password) {
                        localStorage.setItem('userLogin', element.name)
                    }
                });
                location.reload()
            })
        });
    const btnLeave = document.querySelector('.profile__leave');
    btnLeave.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('userLogin');
        location.reload();
    })
}

export default init();
