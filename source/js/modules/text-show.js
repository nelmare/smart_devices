const content = document.querySelector('[data-text="about"]');
const showHideButton = document.querySelector('[data-button="about"]');

const showText = () => {
  content.classList.remove('is-nojs');

  showHideButton.addEventListener('click', function (evt) {
    evt.stopPropagation();
    if (content) {
      if (content.classList.contains('is-hidden')) {
        content.classList.remove('is-hidden');
        content.classList.add('is-shown');
        showHideButton.textContent = 'Свернуть';
      } else {
        content.classList.remove('is-shown');
        content.classList.add('is-hidden');
        showHideButton.textContent = 'Подробнее';
      }
      return false;
    }
  });
};

export {content, showHideButton, showText};
