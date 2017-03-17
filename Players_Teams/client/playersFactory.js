app.factory('playersFactory', function()
{
    var factory = {};
    var players = [];

    factory.getPlayers = function(callback)
    {
        callback(players);
    }

    factory.addPlayer = function(data)
    {
        players.push(data);
    }

    factory.delPlayer = function(idx)
    {
        players.splice(idx, 1);
    }
    return factory;
})