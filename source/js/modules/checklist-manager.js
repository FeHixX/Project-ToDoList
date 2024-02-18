const manageChecklists = () => {
  const tasks = document.querySelector('.tasks');

  if (!tasks) {
    return;
  }

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

  tasks.addEventListener('click', (evt) => {
    const currentChecklist = evt.target;

    if (currentChecklist.classList.contains('btn--add-checklist')) {
      let newChecklist = document.createElement('div');
      newChecklist.className = 'tasks__checklist checklist';
      newChecklist.innerHTML = CHECKLIST_HTML;
      tasks.appendChild(newChecklist);
      let editableText = newChecklist.querySelector('[contenteditable]');
      editableText.focus();
    }

    if (currentChecklist.classList.contains('btn--delete-checklist')) {
      const checklist = currentChecklist.closest('.tasks__checklist');
      if (checklist) {
        checklist.remove();
      }
    }
  });
};

export {manageChecklists};
