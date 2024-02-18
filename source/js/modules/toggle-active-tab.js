// Функция для переключения активного класса вкладок
const toggleActiveTabClass = () => {
  // Константы для класса активности и селектора вкладок
  const ACTIVE_CLASS = 'is-active';
  const TABS_SELECTOR = '[data-tabs="tabs"]';

  // Получаем элемент вкладок
  const tabs = document.querySelector('.tabs');

  // Если элемент вкладок не найден, прекращаем выполнение функции
  if (!tabs) {
    return;
  }

  // Добавляем обработчик событий для элемента вкладок
  tabs.addEventListener('click', (evt) => {
    const currentTab = evt.target;
    const tabsItem = tabs.querySelectorAll(TABS_SELECTOR);

    // Если текущая вкладка не соответствует селектору вкладок, прекращаем выполнение функции
    if (!currentTab.matches(TABS_SELECTOR)) {
      return;
    }

    // Переключаем класс активности для всех вкладок
    tabsItem.forEach((tab) => {
      tab.classList.toggle(ACTIVE_CLASS, tab === currentTab);
    });
  });
};

// Экспортируем функцию для использования в других модулях
export {toggleActiveTabClass};
