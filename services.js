'use strict';

app.service('OmdbSearch', ['$http', function($http) {
  var vm = this;
  vm.searchResults = [];
  vm.movie = {};
  vm.searchFilter = '';
  this.search = function(searchQuery, searchFilter) {
    if (searchFilter) {
      $http.get('http://www.omdbapi.com/?s=' + searchQuery + '&type=' + searchFilter)
      .then(function(data) {
        vm.searchResults = data.data.Search;
      })
      .catch(function(err) {
        console.log(err);
      });
    } else {
      $http.get('http://www.omdbapi.com/?s=' + searchQuery)
      .then(function(data) {
        vm.searchResults = data.data.Search;
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  };
  this.movieSearch = function(imdbID) {
    $http.get('http://www.omdbapi.com/?i=' + imdbID)
    .then(function(data) {
      vm.movie = data.data;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
}]);
