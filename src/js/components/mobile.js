const mobileButton = document.querySelector('.js--header-button');
const mobileMenu = document.querySelector('.js--mobile-menu');

mobileButton.addEventListener('click', (e) => {
    e.preventDefault
    mobileButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

document.addEventListener('click', (e) => {
        if(!mobileButton.contains(e.target) && !mobileMenu.contains(e.target)){
            mobileButton.classList.remove('active');
            mobileMenu.classList.remove('active');
        } 
})