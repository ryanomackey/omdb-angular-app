'use strict';

var app = angular.module('OmdbApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'/partials/search-results.html',
    controller: 'SearchController',
    controllerAs: 'SC'
  })
  .when('/:imdbID', {
    templateUrl:'/partials/movie.html',
    controller: 'SearchController',
    controllerAs: 'SC'
  });
});
