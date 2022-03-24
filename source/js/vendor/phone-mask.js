const userPhoneMaskFill = () => {
  let userPhone = document.getElementById('user-phone');
  let userCallbackPhone = document.getElementById('user-phone-callback');
  let maskOptions = {
    mask: '+{7}(000)000-00-00',
    autofix: true,
  };

  IMask(userPhone, maskOptions);
  IMask(userCallbackPhone, maskOptions);
};

export {userPhoneMaskFill};
