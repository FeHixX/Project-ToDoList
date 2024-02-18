// Функция для сохранения данных чек-листа в локальное хранилище
const saveToLocalStorage = () => {
  // Получаем все чек-листы
  const checklists = document.querySelectorAll('.tasks__checklist');
  let checklistsData = [];

  // Для каждого чек-листа
  checklists.forEach((checklist, index) => {
    let checklistData = {};
    // Сохраняем позицию блока и заголовок
    checklistData.position = index; // сохраняем позицию блока
    checklistData.title = checklist.querySelector('.checklist__title').innerText;

    // Получаем все элементы чек-листа
    let items = checklist.querySelectorAll('.checklist__item');
    checklistData.items = [];

    // Для каждого элемента чек-листа
    items.forEach((item) => {
      let itemData = {};
      // Сохраняем состояние чекбокса и текст элемента
      itemData.checked = item.querySelector('input[type="checkbox"]').checked;
      itemData.text = item.querySelector('span[contenteditable="false"]').innerText;
      // Добавляем данные элемента в массив
      checklistData.items.push(itemData);
    });

    // Добавляем данные чек-листа в массив
    checklistsData.push(checklistData);
  });

  // Сохраняем данные чек-листа в локальное хранилище
  localStorage.setItem('checklists', JSON.stringify(checklistsData));
};

// Экспортируем функцию для использования в других модулях
export {saveToLocalStorage};
