let init = () => {
    fetch('/ElectronicLibrary/librex/php/profile-base/data.json')
        .then(response => response.json())
        .then(data => {
            const btn = document.querySelector('.entry__button')
            console.log(data);

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const pas = document.querySelector('.entry__password').value;
                const email = document.querySelector('.entry__email').value;
                const login = document.querySelector('.entry__login').value;
                
                data.forEach(element => {
                    if (element.email === email && element.pas === pas) {
                        document.querySelector('.forms__wrapper').classList.remove('active')
                    }
                });
            })
        });
}

export default init();
