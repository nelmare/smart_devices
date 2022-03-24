import {iosVhFix} from './utils/ios-vh-fix';
import {anchorsScroll} from './modules/anchors-scroll';
import {validateForm} from './modules/form';
import {userPhoneMaskFill} from './vendor/phone-mask';
import {initAccordion} from './modules/init-accordion';
import {initModals} from './modules/modals/init-modals';
import {onIntroButtonContentSet, changeIntroButtonContent} from './modules/button-content';
import {showText} from './modules/text-show';
import {onCardsHeadingContentSet, changeCardsHeadingContent} from './modules/cards-heading';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  // Modules
  anchorsScroll();
  validateForm();
  userPhoneMaskFill();
  initAccordion();
  initModals();
  onIntroButtonContentSet();
  changeIntroButtonContent();
  onCardsHeadingContentSet();
  changeCardsHeadingContent();
  showText();
});
