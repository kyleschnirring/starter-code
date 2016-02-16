(function(module) {
  var repos = {};

  repos.all = [];

  // TODO: Refactor this ajax call into a get request to the proxy end point provided by server.js.
  repos.requestRepos = function(callback) {
    $.get("/github/users/kyleschnirring/repos", function (response, error) {
      if (error) {
        console.log(error);
      }
      console.log(response);
      callback(response);
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
