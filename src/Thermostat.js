'use strict';
class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = 'on';
  };
  up() {
    if (this.temperature < 25) {
      this.temperature++;
    } else if (this.temperature < 32 && this.powerSaving == 'off') {
      this.temperature++;
    };
  };
  down() {
    if (this.temperature > 10) {
      this.temperature--;
    };
  };
  powerSavingOff() {
    this.powerSaving = 'off';
  };
};
