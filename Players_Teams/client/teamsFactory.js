app.factory('teamsFactory', function () {
    var factory = {};
    var teams = [];

    factory.getTeams = function (callback) {
        callback(teams);
    }

    factory.addTeam = function (data) {
        teams.push(data);
    }

    factory.delTeam = function (idx) {
        teams.splice(idx, 1);
    }
    return factory;
})