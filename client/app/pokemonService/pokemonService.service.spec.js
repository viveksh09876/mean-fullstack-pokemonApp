'use strict';

describe('Service: pokemonService', function () {

  // load the service's module
  beforeEach(module('pokemonAppApp'));

  // instantiate service
  var pokemonService;
  beforeEach(inject(function (_pokemonService_) {
    pokemonService = _pokemonService_;
  }));

  it('should do something', function () {
    expect(!!pokemonService).toBe(true);
  });

});
