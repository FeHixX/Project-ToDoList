// Функция для загрузки данных чек-листа из локального хранилища
const loadFromLocalStorage = () => {
  // Получаем данные чек-листа из локального хранилища
  const checklistsData = JSON.parse(localStorage.getItem('checklists'));

  // Если данные чек-листа существуют
  if (checklistsData) {
    // Получаем элемент задач и чек-листа
    const tasks = document.querySelector('.tasks');
    const checklist = tasks.querySelector('.tasks__checklist.checklist');
    // Удаляем текущий чек-лист
    checklist.remove();

    // Для каждого элемента данных чек-листа
    checklistsData.forEach((checklistData) => {
      // Создаем новый чек-лист
      let newChecklist = document.createElement('div');
      newChecklist.className = 'tasks__checklist checklist';
      // Заполняем HTML нового чек-листа данными из локального хранилища
      newChecklist.innerHTML = `
        <div class="checklist__header">
          <div class="checklist__rename">
            <h2 class="checklist__title" contenteditable>${checklistData.title}</h2>
            <svg width="20" height="18" aria-hidden="true" focusable="false">
              <use href="./img/sprite.svg#rename"></use>
            </svg>
          </div>
          <btn class="checklist__btn-delete-checklist btn btn--delete-checklist" type="btn">Удалить чек-лист</btn>
        </div>
        <ul class="checklist__list">
          ${checklistData.items.map((item) => `
            <li class="checklist__item">
              <label>
                <input type="checkbox" ${item.checked ? 'checked' : ''}>
                <span class="checklist__custom-checkbox"></span>
                <span contenteditable="false">${item.text}</span>
              </label>
              <btn class="checklist__btn-delete-item btn btn--delete-item" type="btn">
                <svg width="20" height="26" aria-hidden="true" focusable="false">
                  <use href="./img/sprite.svg#delete"></use>
                </svg>
              </btn>
            </li>
          `).join('')}
        </ul>
        <btn class="checklist__btn-add-item btn btn--add-item" type="btn">+ добавить пункт</btn>
      `;
      // Добавляем новый чек-лист в элемент задач
      tasks.appendChild(newChecklist);
    });
  }
};

// Экспортируем функцию для использования в других модулях
export {loadFromLocalStorage};
