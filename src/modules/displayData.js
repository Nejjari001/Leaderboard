const display = document.querySelector('.names-scores');

const displayData = (LeaderData) => {
  if (!LeaderData.length) display.innerHTML = 'p class=\'details\'>No scores available!</p>';

  LeaderData.forEach((data) => {
    const nameUser = document.createElement('p');
    nameUser.classList.add('details');
    nameUser.id = 'details';
    display.appendChild(nameUser);
    nameUser.innerHTML = `${data.name} : ${data.score}`;
  });
};

export default displayData;