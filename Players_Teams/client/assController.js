// JavaScript source code
app.controller('associationsController', function(playersFactory, teamsFactory)
{
    var self = this;
    self.asses = [];

    playersFactory.getPlayers(function(data)
    {
        self.players = data;
    })

    teamsFactory.getTeams(function(data)
    {
        self.teams = data;
    })

    self.assign = function()
    {
        self.asses.push({ 'player': self.assPlayer, 'team': self.assTeam });
    }

    self.delAss = function(idx)
    {
        self.asses.splice(idx, 1);
    }

})