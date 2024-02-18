// Функция для сортировки элементов чек-листа
const sortChecklistItems = () => {
  // Получаем список вкладок
  const tabsList = document.querySelector('.tasks__tabs-list');

  // Если список вкладок не найден, прекращаем выполнение функции
  if (!tabsList) {
    return;
  }

  // Селектор для чекбоксов и константы для отображения
  const CHECKBOX_SELECTOR = 'input[type="checkbox"]';
  const DISPLAY_FLEX = 'flex';
  const DISPLAY_NONE = 'none';

  // Добавляем обработчик событий для списка вкладок
  tabsList.addEventListener('click', (evt) => {
    // Если была выбрана опция сортировки
    if (evt.target.dataset.sort) {
      // Получаем все элементы чек-листа
      let items = Array.from(document.querySelectorAll('.checklist__item'));
      // В зависимости от выбранной опции сортировки
      switch (evt.target.dataset.sort) {
        case 'all':
          // Показываем все элементы
          items.forEach((item) => {
            item.style.display = DISPLAY_FLEX;
          });
          break;
        case 'active':
          // Показываем только активные элементы
          items.forEach((item) => {
            if (item.querySelector(CHECKBOX_SELECTOR).checked) {
              item.style.display = DISPLAY_NONE;
            } else {
              item.style.display = DISPLAY_FLEX;
            }
          });
          break;
        case 'checked':
          // Показываем только отмеченные элементы
          items.forEach((item) => {
            if (item.querySelector(CHECKBOX_SELECTOR).checked) {
              item.style.display = DISPLAY_FLEX;
            } else {
              item.style.display = DISPLAY_NONE;
            }
          });
          break;
      }
    }
  });
};

// Экспортируем функцию для использования в других модулях
export {sortChecklistItems};
