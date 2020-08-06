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
    })
  })
});
