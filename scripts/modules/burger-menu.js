let init = () => {
    const btn = document.querySelector(".burger__button");
    const burgMenu = document.querySelector(".burger__wrapper")
    btn.addEventListener("click", () => {
        burgMenu.classList.toggle("active")
    })
}

let initBurger = init();

export default initBurger;