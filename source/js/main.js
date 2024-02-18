import {toggleActiveTabClass} from './modules/toggle-active-tab';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    toggleActiveTabClass();
  });
});
