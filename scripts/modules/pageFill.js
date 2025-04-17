let init =()=> 
{
    
    console.log(localStorage);
    let author = document.querySelector('.product__author')
    author.textContent += localStorage.getItem("author")
    let name = document.querySelector('.product__title')
    name.textContent = localStorage.getItem('name')
    let description = document.querySelector('.product__description')
    description.textContent = localStorage.getItem('description')
    let img = document.querySelector('.product__image')
    img.src = localStorage.getItem('img')

}
let initialization = init();
export default initialization
