// JavaScript source code
app.controller('playersController', function (playersFactory)
{
    var self = this;

    playersFactory.getPlayers(function (data)
    {
        self.players = data;
    })

    self.addPlayer = function()
    {
        playersFactory.addPlayer(self.newPlayer);
        self.newPlayer = {};
    }

    self.delPlayer = function(idx)
    {
        playersFactory.delPlayer(idx);
    }
})