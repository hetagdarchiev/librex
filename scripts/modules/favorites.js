let init = ()=> 
{
    console.log(15);
    
    let fluidSection = document.querySelector('.favorites__wrapper')
    let obj = JSON.parse(localStorage.favorites)
    for(let i in obj)
    {
        console.log(obj[i]);
        
    }
    console.log(obj);
    
}

const initialization = init();
export default initialization;