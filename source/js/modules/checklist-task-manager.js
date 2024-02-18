import {saveToLocalStorage} from './local-storage-save';

// Функция для управления задачами в чек-листе
const manageChecklistTasks = () => {
  // Получаем элемент задач
  const tasks = document.querySelector('.tasks');

  // Если элемент задач не найден, прекращаем выполнение функции
  if (!tasks) {
    return;
  }

  // HTML-структура элемента задачи
  const TASK_ITEM_HTML = `
  <label>
    <input type="checkbox">
    <span class="checklist__custom-checkbox"></span>
    <span class="checklist__custom-label" contenteditable="true">Описание</span>
  </label>
  <btn class="checklist__btn-delete-item btn btn--delete-item" type="btn">
    <svg width="20" height="26" aria-hidden="true" focusable="false">
      <use href="./img/sprite.svg#delete"></use>
    </svg>
  </btn>
`;

  // Добавляем обработчик событий для элемента задач
  tasks.addEventListener('click', (evt) => {
    // Если была нажата кнопка "Добавить элемент"
    if (evt.target.closest('.btn--add-item')) {
      const checklist = evt.target.closest('.tasks__checklist');
      if (checklist) {
        let newItem = document.createElement('li');
        newItem.className = 'checklist__item';
        newItem.innerHTML = TASK_ITEM_HTML;
        // Добавляем новый элемент в чек-лист
        const checklistList = checklist.querySelector('.checklist__list');
        checklistList.appendChild(newItem);
        // Устанавливаем фокус на редактируемый текст
        const editableText = newItem.querySelector('[contenteditable]');
        editableText.focus();
        // При потере фокуса сохраняем данные в локальное хранилище
        editableText.addEventListener('blur', (event) => {
          event.target.contentEditable = 'false';
          saveToLocalStorage();
        });

        // Предотвращаем изменение состояния чекбокса при клике на текст
        const label = newItem.querySelector('label');
        label.addEventListener('click', (event) => {
          if (document.activeElement === editableText) {
            event.preventDefault();
          }
        });
      }
    }

    // Если была нажата кнопка "Удалить элемент"
    if (evt.target.closest('.btn--delete-item')) {
      let listItem = evt.target.closest('.checklist__item');
      if (listItem) {
        listItem.remove();
        saveToLocalStorage();
      }
    }

    // Отслеживание изменений состояния чекбоксов
    const checkbox = evt.target;
    // Если этот элемент - чекбокс
    if (checkbox.matches('input[type="checkbox"]')) {
      // Вызываем функцию сохранения в локальное хранилище
      saveToLocalStorage();
    }
  });
};

// Экспортируем функцию для использования в других модулях
export {manageChecklistTasks};
