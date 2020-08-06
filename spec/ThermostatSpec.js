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
    it('cannot raise temperature above maximum of 25 degrees', function() {
      termos.temperature = 25
      termos.up();
      expect(termos.temperature).toEqual(25);
    });
    it('can go above 25 degrees with PSM off', function() {
      termos.temperature = 25;
      termos.powerSavingOff();
      termos.up();
      expect(termos.temperature).toEqual(26);
    });
    it('cannot go above 32 degrees with PSM off', function() {
      termos.powerSavingOff();
      termos.temperature = 32;
      termos.up();
      expect(termos.temperature).toEqual(32);
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
