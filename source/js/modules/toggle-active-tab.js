const toggleActiveTabClass = () => {
  const ACTIVE_CLASS = 'is-active';
  const TABS_SELECTOR = '[data-tabs="tabs"]';
  const tabs = document.querySelector('.tabs');

  if (!tabs) {
    return;
  }

  tabs.addEventListener('click', (evt) => {
    const currentTab = evt.target;
    const tabsItem = tabs.querySelectorAll(TABS_SELECTOR);

    if (!currentTab.matches(TABS_SELECTOR)) {
      return;
    }

    tabsItem.forEach((tab) => {
      tab.classList.toggle(ACTIVE_CLASS, tab === currentTab);
    });
  });
};

export {toggleActiveTabClass};
