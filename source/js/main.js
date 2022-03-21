import {iosVhFix} from './utils/ios-vh-fix';
import {anchorsScroll} from './modules/anchors-scroll';
// import {localStorageDataSet} from './modules/form';
// import {userPhoneInputValidate} from './modules/phone-validate';
import {initAccordion} from './modules/init-accordion';
import {introBlock, introButton, onIntroButtonContentSet, changeIntroButtonContent} from './modules/button-content'

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
});
