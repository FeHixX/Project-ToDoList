import {toggleActiveTabClass} from './modules/toggle-active-tab';
import {manageChecklists} from './modules/checklist-manager';
import {manageChecklistTasks} from './modules/checklist-task-manager';
import {sortChecklistItems} from './modules/checklist-sorter';
import {loadFromLocalStorage} from './modules/local-storage-load';

window.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();

  window.addEventListener('load', () => {
    toggleActiveTabClass();
    manageChecklists();
    manageChecklistTasks();
    sortChecklistItems();
  });
});
