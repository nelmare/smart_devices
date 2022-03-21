const introBlock = document.querySelector('.intro');
const introButton = introBlock.querySelector('[data-anchor="1"]');

const onIntroButtonContentSet = () => {
  if (introButton && window.innerWidth <= 767) {
    introButton.textContent = 'Бесплатная консультация';
  } else if (introButton && window.innerWidth >= 768) {
    introButton.textContent = 'Получить бесплатную консультацию';
  }
}

const changeIntroButtonContent = () => {
  window.addEventListener("resize", onIntroButtonContentSet);
}

export {introBlock, introButton, onIntroButtonContentSet, changeIntroButtonContent}
