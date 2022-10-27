const gameID = document.getElementById("game-name");

const apiGameID = async () => {
  const data = { name: gameID.value };
  const fetchUrl =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games";

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const resolve = await fetch(fetchUrl, params);
    return await resolve.json();
  } catch (error) {
    return error;
  }
};

export default apiGameID;
