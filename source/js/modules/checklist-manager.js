import {saveToLocalStorage} from './local-storage-save';

// Функция для управления чек-листами
const manageChecklists = () => {
  // Получаем элемент задач
  const tasks = document.querySelector('.tasks');

  // Если элемент задач не найден, прекращаем выполнение функции
  if (!tasks) {
    return;
  }

  // HTML-структура чек-листа
  const CHECKLIST_HTML = `
  <div class="checklist__header">
    <div class="checklist__rename">
    <h2 class="checklist__title" contenteditable>Заголовок</h2>
      <svg width="20" height="18" aria-hidden="true" focusable="false">
        <use href="./img/sprite.svg#rename"></use>
      </svg>
    </div>
    <btn class="checklist__btn-delete-checklist btn btn--delete-checklist" type="btn">Удалить чек-лист</btn>
  </div>
  <ul class="checklist__list"></ul>
  <btn class="checklist__btn-add-item btn btn--add-item" type="btn">+ добавить пункт</btn>
`;

  // Добавляем обработчик событий для элемента задач
  tasks.addEventListener('click', (evt) => {
    const currentChecklist = evt.target;

    // Если была нажата кнопка "Добавить чек-лист"
    if (currentChecklist.classList.contains('btn--add-checklist')) {
      let newChecklist = document.createElement('div');
      newChecklist.className = 'tasks__checklist checklist';
      newChecklist.innerHTML = CHECKLIST_HTML;
      // Добавляем новый элемент в чек-лист
      tasks.appendChild(newChecklist);
      // Устанавливаем фокус на редактируемый текст
      let editableText = newChecklist.querySelector('[contenteditable]');
      editableText.focus();
      saveToLocalStorage();
    }

    // Если была нажата кнопка "Удалить чек-лист"
    if (currentChecklist.classList.contains('btn--delete-checklist')) {
      const checklist = currentChecklist.closest('.tasks__checklist');
      if (checklist) {
        checklist.remove();
        saveToLocalStorage();
      }
    }

    // Если редактируется заголовок
    if (evt.target.matches('.checklist__title')) {
      evt.target.addEventListener('input', () => {
        saveToLocalStorage();
      });
    }
  });
};

// Экспортируем функцию для использования в других модулях
export {manageChecklists};
