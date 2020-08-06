'use strict';
describe('Thermostat', function() {
  it('start at 20 degree', function() {
    let termos = new Thermostat;
    expect(termos.temperature).toEqual(20);
  });
});
