export const forms = document.querySelectorAll('.form');

const validateForm = () => {
  forms.forEach((form) => {
    const userNameInput = form.querySelector('[name=name]');
    const userPhoneInput = form.querySelector('[name=phone]');

    if (form) {
      form.addEventListener('submit', function (evt) {
        if (!userNameInput.value || !userPhoneInput.value) {
          evt.preventDefault();
          form.offsetWidth = form.offsetWidth;
        } else {
          localStorage.setItem('name', userNameInput.value);
          localStorage.setItem('phone', userPhoneInput.value);
        }
      });
    }

    userPhoneInput.addEventListener('invalid', () => {
      if (userPhoneInput.validity.patternMismatch) {
        userPhoneInput.setCustomValidity('Номер телефона должен содержать 11 цифр');
      } else if (userPhoneInput.validity.valueMissing) {
        userPhoneInput.setCustomValidity('Обязательное поле');
      } else {
        userPhoneInput.setCustomValidity('');
      }
    });
  });
};

export {validateForm};
