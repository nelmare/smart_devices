import {iosVhFix} from './utils/ios-vh-fix';
import {anchorsScroll} from './modules/anchors-scroll';
// import {localStorageDataSet} from './modules/form';
// import {userPhoneInputValidate} from './modules/phone-validate';
import {initAccordion} from './modules/init-accordion';
import {onIntroButtonContentSet, changeIntroButtonContent} from './modules/button-content';
import {showText} from './modules/text-show';
import {onCardsHeadingContentSet, changeCardsHeadingContent} from './modules/cards-heading'

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  // Modules
  anchorsScroll();
  // localStorageDataSet();
  // userPhoneInputValidate();
  initAccordion();
  onIntroButtonContentSet();
  changeIntroButtonContent();
  onCardsHeadingContentSet();
  changeCardsHeadingContent();
  showText();
});
