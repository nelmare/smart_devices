const accordion = (function (element) {
  const _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    let element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {
    let _mainElement = {}, // .accordion
      _items = {}, // .accordion__item
      _contents = {}; // .accordion__content
    const _actionClick = function (e) {
        if (!e.target.classList.contains('accordion__heading')) { // прекращаем выполнение функции если кликнули не по заголовку
          return;
        }
        e.preventDefault(); // отменям стандартное действие
        // получаем необходимые данные
        const header = e.target,
          item = header.parentElement,
          itemActive = _getItem(_items, 'is-shown');
        if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
          item.classList.add('is-shown');
        } else {
          // удаляем класс show у ткущего элемента
          itemActive.classList.remove('is-shown');
          // если следующая вкладка не равна активной
          if (itemActive !== item) {
            // добавляем класс show к элементу (в зависимости от выбранного заголовка)
            item.classList.add('is-shown');
          }
        }
      },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener('click', _actionClick);
      };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion__item');
        _setupListeners();
      }
    }
  }
})();

// const accordion = () => {
//   var accItems = document.querySelectorAll('.accordionItem');
//   var accHDs = document.querySelectorAll('.accordionItemHeading');
//
//   const toggleItem = (e) => {
//     var itemClass = e.target.parentNode.className;
//     for (let i = 0; i < accItems.length; i++) {
//       accItems[i].className = 'accordionItem close';
//     }
//     if (itemClass === 'accordionItem close') {
//       e.target.parentNode.className = 'accordionItem open';
//     }
//   }
//
//   for (let i = 0; i < accHDs.length; i++) {
//     accHDs[i].addEventListener('click', toggleItem, false);
//   }
// }
//
export {accordion};

// const accordion = () => {
//   var accItems = document.querySelectorAll('[data-accordion="item"]');
//   var accHDs = document.querySelectorAll('[data-accordion="heading"]');
//
//
//
//
//   const toggleItem = (e) => {
//     var itemClass = e.target.parentNode.classList;
//     for (let i = 0; i < accItems.length; i++) {
//       accItems[i].classList.add('close');
//       accItems[i].classList.remove('open');
//
//     }
//     if (itemClass.contains('close')) {
//       e.target.parentNode.classList.remove('close');
//       e.target.parentNode.classList.add('open');
//     } else {
//       e.target.parentNode.classList.remove('open');
//       e.target.parentNode.classList.add('close');
//     }
//   }
//
//   for (let i = 0; i < accHDs.length; i++) {
//     accHDs[i].addEventListener('click', toggleItem, false);
//   }
// }
//
// export {accordion};
