const cardsBlock = document.querySelector('.cards');
const cardsHeading = cardsBlock.querySelector('[data-heading="1"]');

const onCardsHeadingContentSet = () => {
  if (cardsHeading && window.innerWidth <= 767) {
    cardsHeading.textContent = 'Товары и\u00A0услуги Smart Device';
  } else if (cardsHeading && window.innerWidth >= 768) {
    cardsHeading.textContent = 'Smart Device предлагает следующие товары и\u00A0услуги';
  }
}

const changeCardsHeadingContent = () => {
  window.addEventListener("resize", onCardsHeadingContentSet);
}

export {cardsBlock, cardsHeading, onCardsHeadingContentSet, changeCardsHeadingContent}
