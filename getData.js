async function getData(username, api_url, match_url, tagline){
    
    const response= await fetch(api_url);
    const match_response = await fetch(match_url);

    const data= await response.json();
    const match_data = await match_response.json();

    match_info = match_data.data;
    matches_length = match_info.length;

    datamain = data.data;
    length = datamain.length;
    var rank='<ol class="center">';
    complist = [];
    for(i= 0; i < matches_length; i++) {
        temp = match_info[i].metadata.mode;
        if (temp == 'Competitive') {
            complist.push(match_info[i]);
        }
    }
    playerinfo = [];
    for (i = 0; i < complist.length; i++) {
        players_length = complist[i].players.all_players.length;
        for (j = 0; j < players_length; j++) {
            if (complist[i].players.all_players[j].name == username) {
                playerinfo.push(complist[i].players.all_players[j]);
            }
        }
    }
    for (i = 0; i < complist.length; i++) {
        timeplayed = Math.round(complist[i].metadata.game_length / 60000);
        KD = (playerinfo[i].stats.kills / playerinfo[i].stats.deaths).toFixed(2);
        rank += "<li> Map Name: " + complist[i].metadata.map + ", Rounds played: " + complist[i].metadata.rounds_played + ", Total time played in minutes: " + timeplayed + ", Date: " + complist[i].metadata.game_start_patched + "<br> Rank: <img src=" + datamain[i].images.small + "></img> " + datamain[i].ranking_in_tier + "/100 in " + datamain[i].currenttierpatched + " ( " + datamain[i].mmr_change_to_last_game + " Change in mmr.) , Character played: " + 
        playerinfo[i].character + "<br> Total Kills: " + playerinfo[i].stats.kills + ", Deaths: " + playerinfo[i].stats.deaths + ", Assists: " + playerinfo[i].stats.assists + " K/D for match: " + KD + ", Score: " + playerinfo[i].stats.score + "</li>";
        //dbAdd(usernameFull, playerinfo[i].stats.kills, playerinfo[i].stats.assists, playerinfo[i].stats.deaths, KD, playerinfo[i].character, complist[i].metadata.rounds_played, timeplayed, complist[i].metadata.map, datamain[i].images.small, datamain[i].mmr_change_to_last_game);
        var mmr = datamain[i].ranking_in_tier + "/100";
        const response = await fetch("https://api.mmrtracker.com:8082/mmr", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: `{ "mmr_data": {
                "username": "${username}",
                "kills": "${playerinfo[i].stats.kills}",
                "assists": "${playerinfo[i].stats.assists}",
                "deaths": "${playerinfo[i].stats.deaths}",
                "kd": "${KD}",
                "character_name": "${playerinfo[i].character}",
                "rounds_played": "${complist[i].metadata.rounds_played}",
                "time_played": "${timeplayed}",
                "map_name": "${complist[i].metadata.map}",
                "ranked_image": "${datamain[i].images.small}",
                "mmr_diff": "${datamain[i].mmr_change_to_last_game}",
                "score": "${playerinfo[i].stats.score}",
                "mmr": "${mmr}",
                "rank": "${datamain[i].currenttierpatched}",
                "date": "${complist[i].metadata.game_start_patched}",
                "tag": "${tagline}"
                }
            }`,
        });
    }
    rank += "</ol>"
    usernameFull = "<tr>Username: " + username;
    document.getElementById("usernameFull").innerHTML=usernameFull;
    document.getElementById("rank").innerHTML=rank;
}

function getVData() {
    const username = document.getElementById('username').value;
    const tagline = document.getElementById('tagline').value;
    const api_url = 
    `https://api.henrikdev.xyz/valorant/v1/mmr-history/na/${username}/${tagline}`;
    const match_api_url = 
    `https://api.henrikdev.xyz/valorant/v3/matches/na/${username}/${tagline}`



    getData(username, api_url, match_api_url, tagline);
}
