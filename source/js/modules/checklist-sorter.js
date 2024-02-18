const sortChecklistItems = () => {
  const tabsList = document.querySelector('.tasks__tabs-list');

  if (!tabsList) {
    return;
  }

  const CHECKBOX_SELECTOR = 'input[type="checkbox"]';
  const DISPLAY_FLEX = 'flex';
  const DISPLAY_NONE = 'none';

  tabsList.addEventListener('click', (evt) => {
    if (evt.target.dataset.sort) {
      let items = Array.from(document.querySelectorAll('.checklist__item'));
      switch (evt.target.dataset.sort) {
        case 'all':
          items.forEach((item) => {
            item.style.display = DISPLAY_FLEX;
          });
          break;
        case 'active':
          items.forEach((item) => {
            if (item.querySelector(CHECKBOX_SELECTOR).checked) {
              item.style.display = DISPLAY_NONE;
            } else {
              item.style.display = DISPLAY_FLEX;
            }
          });
          break;
        case 'checked':
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

export {sortChecklistItems};
