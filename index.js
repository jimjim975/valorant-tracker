import { fetchMatchData, fetchMmrData } from "./api-controller/controller";

document.getElementById('submit-button').addEventListener('click', () => onSubmit());

const onSubmit = (event) => {
    console.log("CLICKY CLICK")

    const username = document.getElementById('username').value;
    const tagline = document.getElementById('tagline').value;
    const MMR_API_URL = 
    `https://api.henrikdev.xyz/valorant/v1/mmr-history/na/${username}/${tagline}`;
    const MATCH_API_URL = 
    `https://api.henrikdev.xyz/valorant/v3/matches/na/${username}/${tagline}`;

    const MATCH_RESULT = fetchMatchData(MATCH_API_URL);
    const MMR_RESULT = fetchMmrData(MMR_API_URL);

    console.trace(MATCH_RESULT);
    // createHistoryList(username, MATCH_RESULT, MMR_RESULT);
}

