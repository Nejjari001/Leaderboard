import './style.css';
import ScoreResult from './modules/ScoreResult.js';
import displayData from './modules/displayData.js';
import LeaderData from './modules/LeaderData.js';
import refreshData from './modules/refreshData.js';

const form = document.getElementById('form');
const name = document.getElementById('name');
const score = document.getElementById('score');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newScore = new ScoreResult(name.value, score.value);
  LeaderData.push(newScore);
  form.reset();
});

refreshData();
displayData(LeaderData);