'use strict';

angular.module('pokemonAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pokedex', {
        url: '/',
        templateUrl: 'app/pokedex/templates/pokedex.html',
        controller: 'PokedexCtrl'
      })
      .state('pokedex.add', {
        url: 'add',
        controller: 'PokedexCtrl',
        views: {
          'pokedex-content': { templateUrl: 'app/pokedex/templates/pokedex.add.html' }
        }
      })
      .state('pokedex.view', {
        url: ':name',
        controller: 'PokedexCtrl',
        views: {
          'pokedex-content': { templateUrl: 'app/pokedex/templates/pokedex.view.html' }
        }
      });

  });
