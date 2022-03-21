import {accordion} from './accordion';

const accordionItems = document.querySelectorAll('[data-text="accordion"]');
const initAccordion = () => {
  accordionItems.forEach((accordionItem) => {
    accordionItem.classList.remove('is-nojs');
  });

  let accordion1 = accordion();
  accordion1.init('#accordion');
};

export {initAccordion};
