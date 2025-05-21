function remuvedClass(forms) {
    forms.forEach(el=> {
        el.classList.remove('active')
    })
}
let init = () => {
    let btns = document.querySelectorAll('.tabs-form__button')
    let forms = document.querySelectorAll('form')
    btns.forEach((el, index) => {
        el.addEventListener('click', () => {
            {
                remuvedClass(forms)
                forms[index].classList.add('active')
            }
        })
    })
}
export default init();