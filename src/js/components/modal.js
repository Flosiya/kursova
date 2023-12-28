
const modalController = () => {
    const buttonElem = document.querySelector('.nav__button');
    const modalElem = document.querySelector('.modal');
    const bodyElem = document.querySelector('body');
  
    modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity:0;
    transition: opacity 300ms ease-in-out;
    `;
  
    const closeModal = event => {
      const target = event.target;
  
      if (target === modalElem || target.closest('.modal__close')) {
  
        modalElem.style.opacity = 0;
        bodyElem.classList.remove('fixed');
        setTimeout(() => {
          modalElem.style.visibility = 'hidden';
        }, 300)
      }
    }
  
    const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      bodyElem.classList.add('fixed');
    };
    buttonElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', closeModal);
  };
  modalController();