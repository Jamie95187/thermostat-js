'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM = 10;
  this._maximum = maxPowerSavingOn;
  this.powerSavingMode = true;
}

const maxPowerSavingOn = 25;
const maxPowerSavingOff = 32;

Thermostat.prototype.increase = function(){
  if (!this._isMaximumTemperature()) {
    this.temperature++;
  };
};

Thermostat.prototype.decrease = function(){
  if (this._isMinimumTemperature()){
    throw "Warning minimum temperature";
  } else {
    this.temperature--;
  };
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
  this._maximum = maxPowerSavingOff;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
  this._maximum = maxPowerSavingOn;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
};

Thermostat.prototype._isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM;
};

Thermostat.prototype._isMaximumTemperature = function() {
  return this.temperature === this._maximum;
};
