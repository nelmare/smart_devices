const accordion = (function () {
  const _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    let element;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {
    let _mainElement = {}; // .accordion
    let _items = {}; // .accordion__item
    const _actionClick = function (e) {
      if (!e.target.classList.contains('accordion__heading')) { // прекращаем выполнение функции если кликнули не по заголовку
        return;
      }
      e.preventDefault(); // отменям стандартное действие
      // получаем необходимые данные
      const header = e.target;
      const item = header.parentElement;
      const itemActive = _getItem(_items, 'is-shown');
      if (!itemActive) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
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
    };
    const _setupListeners = function () {
      // добавим к элементу аккордиона обработчик события click
      _mainElement.addEventListener('click', _actionClick);
    };

    return {
      init(el) {
        _mainElement = (typeof el === 'string' ? document.querySelector(el) : el);
        _items = _mainElement.querySelectorAll('.accordion__item');
        _setupListeners();
      },
    };
  };
})();

export {accordion};
