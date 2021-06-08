import { main } from './modules/main.js';
import { adapter, db, ENTITY_ID, reset, clearState, find } from './modules/localStorage.js';

$(document).ready(() => {
  main();
});