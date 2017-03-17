// JavaScript source code
app.controller('teamsController', function (teamsFactory) {
    var self = this;

    teamsFactory.getTeams(function (data)
    {
        self.teams = data;
    })

    self.addTeam = function ()
    {
        teamsFactory.addTeam(self.newTeam);
        self.newTeam = {};
    }

    self.delTeam = function (idx)
    {
        teamsFactory.delTeam(idx);
    }
})