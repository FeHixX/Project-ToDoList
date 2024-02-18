import {toggleActiveTabClass} from './modules/toggle-active-tab';
import {manageChecklists} from './modules/checklist-manager';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    toggleActiveTabClass();
    manageChecklists();
  });
});
