import './style.css';
// eslint-disable-next-line import/extensions
import apiGameId from './modules/apiGameId';
import displayData from './modules/displayData.js';
import refreshData from './modules/refreshData.js';
import saveScore from './modules/saveScore.js';

const addScore = document.querySelector('.add-score');
const displayScores = document.querySelector('.recent-scores');
const gameForm = document.getElementById('form-name-game');
const form = document.getElementById('form');

window.addEventListener('load', () => {
  displayData();
  refreshData();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveScore();
    form.reset();
  });

  if (localStorage.getItem('game')) {
    gameForm.style.display = 'none';
    addScore.style.display = 'block';
    displayScores.style.display = 'block';
  }

  gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const addGame = apiGameId();
    addGame.then((resolve) => {
      let gameName = resolve.result;
      gameName = gameName.substr(14, 20);

      // Store game name into storage
      if (gameName) {
        localStorage.setItem('game', gameName);
        gameForm.style.display = 'none';
        addScore.style.display = 'block';
        displayScores.style.display = 'block';
      }
    });
  });
});