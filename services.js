'use strict';

app.service('OmdbSearch', ['$http', function($http) {
  var vm = this;
  vm.searchResults = [];
  vm.movie = {};
  this.search = function(searchQuery) {
    $http.get('http://www.omdbapi.com/?s=' + searchQuery)
    .then(function(data) {
      vm.searchResults = data.data.Search;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
  this.movieSearch = function(imdbID) {
    console.log(imdbID);
    $http.get('http://www.omdbapi.com/?i=' + imdbID)
    .then(function(data) {
      vm.movie = data.data;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
}]);
