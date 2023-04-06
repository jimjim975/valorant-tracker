const dbAdd = async (valusername, kills, assists, deaths, kd, charactername, roundsplayed, timeplayed, mapname, rankimage, mmrdiff) => {
    var server = 'db.mmrtracker.com';

    var username = 'mmrtracker';
    var password = '';
    
    
    var connectionString = "postgres://"+username+":"+password+"@"+server+"/:5432/mmrtracker";
    
    var pgClient = new pg.Client(connectionString);
    
    pgClient.connect();
    
    var query = pgClient.query('INSERT INTO public.mmrdata(username, kills, assists, deaths, kd, charactername, roundsplayed, timeplayed, mapname, rankimage, mmrdiff)VALUES ('+valusername+','+kills+','+ assists+','+deaths+','+kd+','+charactername+','+roundsplayed+','+timeplayed+','+mapname+','+rankimage+','+mmrdiff+')');
    query.on("row", function(row,result) {
        result.addRow(row);
    })
    
    console.log(result);
}