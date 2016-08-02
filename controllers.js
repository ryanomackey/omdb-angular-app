'use strict';

app.controller('SearchController', ['OmdbSearch', function(OmdbSearch) {
  var vm = this;
  vm.OmdbSearch = OmdbSearch;
}]);
