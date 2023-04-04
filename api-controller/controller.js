
/**
 * fetch match data from API
 * @param matchURL : url to make fetch request 
 * @returns data property of request
 */
export const fetchMatchData = async (matchURL) => {
    try {
        const MATCH_RESPONSE = await fetch(matchURL);
        const MATCH_JSON = await MATCH_RESPONSE.json();
        return MATCH_JSON.data;
    } catch (e) {
        console.log(e.message)
    }
}

/**
 * fetch mmr details from API
 * @param  mmrURL : url to make fetch request with
 * @returns data property of response
 */
export const fetchMmrData = async (mmrURL) => {
    const MMR_RESPONSE= await fetch(mmrURL);
    const MMR_JSON = await MMR_RESPONSE.json();
    return MMR_JSON.data;
}
