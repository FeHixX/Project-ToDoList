import {toggleActiveTabClass} from './modules/toggle-active-tab';
import {manageChecklists} from './modules/checklist-manager';
import {manageChecklistTasks} from './modules/checklist-task-manager';
import {sortChecklistItems} from './modules/checklist-sorter';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    toggleActiveTabClass();
    manageChecklists();
    manageChecklistTasks();
    sortChecklistItems();
  });
});
