import axios from 'axios';

export const getMmrData = async (username, tag) => {
    try {
        const API_RESPONSE = 
        await axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr-history/na/${username}/${tag}`);
    
        return API_RESPONSE.data;
    } catch(e) {
        console.log(e.message);
    }
}
