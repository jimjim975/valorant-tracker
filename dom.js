function createHistoryList(username, matchResults, mmrResults) {
    // matches_length = match_info.length;

    // datamain = data.data;
    // length = datamain.length;
    // let rank='<ol class="center">';
    // let complist = [];
    // for(i= 0; i < matches_length; i++) {
    //     temp = match_info[i].metadata.mode;
    //     if (temp == 'Competitive') {
    //         complist.push(match_info[i]);
    //     }
    // }

    let playerinfo = []; 
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
    }
    rank += "</ol>"
    usernameFull = "<tr>Username: " + username;
    document.getElementById("usernameFull").innerHTML=usernameFull;
    document.getElementById("rank").innerHTML=rank;
}

