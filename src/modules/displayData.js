const display = document.querySelector('.names-scores');
const id = localStorage.getItem('game');

const displayData = (LeaderData) => {
  if (!LeaderData.length) display.innerHTML = '<p class=\'details\'>No scores available!</p>';

  LeaderData.forEach((data) => {
    const nameUser = document.createElement('p');
    nameUser.classList.add('details');
    nameUser.id = 'details';
    display.appendChild(nameUser);
    nameUser.innerHTML = `${data.name} : ${data.score}`;
  });
};

const fetchScoresFromApi = async () => {
  if (id) {
    const fetchUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const response = await fetch(fetchUrl);
    const fetchedData = await response.json();
    displayData(fetchedData.result);
  }
};

fetchScoresFromApi();

export default displayData;