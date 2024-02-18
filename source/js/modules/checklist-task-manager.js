const manageChecklistTasks = () => {
  const tasks = document.querySelector('.tasks');

  if (!tasks) {
    return;
  }

  const TASK_ITEM_HTML = `
  <label>
    <input type="checkbox">
    <span class="checklist__custom-checkbox"></span>
    <span contenteditable="true">Описание</span>
  </label>
  <btn class="checklist__btn-delete-item btn btn--delete-item" type="btn">
    <svg width="20" height="26" aria-hidden="true" focusable="false">
      <use href="./img/sprite.svg#delete"></use>
    </svg>
  </btn>
`;

  tasks.addEventListener('click', (evt) => {
    if (evt.target.closest('.btn--add-item')) {
      const checklist = evt.target.closest('.tasks__checklist');
      if (checklist) {
        let newItem = document.createElement('li');
        newItem.className = 'checklist__item';
        newItem.innerHTML = TASK_ITEM_HTML;
        const checklistList = checklist.querySelector('.checklist__list');
        checklistList.appendChild(newItem);
        const editableText = newItem.querySelector('[contenteditable]');
        editableText.focus();
        editableText.addEventListener('blur', (event) => {
          event.target.contentEditable = 'false';
        });
      }
    }

    if (evt.target.closest('.btn--delete-item')) {
      let listItem = evt.target.closest('.checklist__item');
      if (listItem) {
        listItem.remove();
      }
    }
  });
};

export {manageChecklistTasks};
