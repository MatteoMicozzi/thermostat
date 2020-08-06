'use strict';
describe('Thermostat', function() {
  it('start at 20 degree', function() {
    let termos = new Thermostat;
    expect(termos.temperature).toEqual(20);
  });
  describe('#up', function() {
    it('raises the temperature', function() {
      let termos = new Thermostat;
      termos.up();
      expect(termos.temperature).toEqual(21);
    });
  });
  describe('#down', function() {
    it('lower the temperature', function() {
      let termos = new Thermostat;
      termos.down();
      expect(termos.temperature).toEqual(19);
    });
    it('dont go lower then 10', function() {
      let termos = new Thermostat;
      termos.temperature = 10;
      termos.down();
      expect(termos.temperature).toEqual(10);
    });
  });
});
