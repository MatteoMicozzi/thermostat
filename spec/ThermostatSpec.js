'use strict';
describe('Thermostat', function() {
  var termos;
  beforeEach(function() {
    termos = new Thermostat;
  })
  it('start at 20 degree', function() {
    expect(termos.temperature).toEqual(20);
  });
  describe('#up', function() {
    it('raises the temperature', function() {
      termos.up();
      expect(termos.temperature).toEqual(21);
    });
  });
  describe('#down', function() {
    it('lower the temperature', function() {
      termos.down();
      expect(termos.temperature).toEqual(19);
    });
    it('dont go lower then 10', function() {
      termos.temperature = 10;
      termos.down();
      expect(termos.temperature).toEqual(10);
    });
  });
});
