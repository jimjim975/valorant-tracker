import { fetchMatchData, fetchMmrData } from "./api-controller/controller.js";

const username = document.getElementById('username').value;
const tagline = document.getElementById('tagline').value;
document.getElementById("submit-button").addEventListener('click', () => onSubmit());

console.log("HERE");
const onSubmit = () => {
    const MMR_API_URL = 
    `https://api.henrikdev.xyz/valorant/v1/mmr-history/na/${username}/${tagline}`;
    const MATCH_API_URL = 
    `https://api.henrikdev.xyz/valorant/v3/matches/na/${username}/${tagline}`;

    const MATCH_RESULT = fetchMatchData(MATCH_API_URL);
    const MMR_RESULT = fetchMmrData(MMR_API_URL);
}

