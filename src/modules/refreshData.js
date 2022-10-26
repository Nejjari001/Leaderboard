import LeaderData from "./LeaderData.js";
import displayData from "./displayData.js";

const display = document.querySelector('.names-scores');
const refresh = document.getElementById('refresh');

const refreshData = () => {
refresh.addEventListener('click', () => {
    display.innerHTML = '';
    displayData(LeaderData);
});

};

export default refreshData;