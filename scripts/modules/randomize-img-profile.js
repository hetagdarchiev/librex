let init = ()=> 
{
    let profileImg = document.querySelector('.profile__img');
    const randomNumber = Math.floor(Math.random() * 18) + 1;
    let path= (name)=> `./assets/images/avatars/(${name}).jpg`;
    profileImg.src= path(randomNumber)
}
export default init()