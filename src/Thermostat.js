'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM = 10;
  this._maximum = maxPowerSavingOn;
  this.powerSavingMode = true;
  this.energyUsage = "medium-usage"
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

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temperature < 18) {
    this.energyUsage = "low-usage";
  } else if (this.temperature < 25) {
    this.energyUsage = "medium-usage";
  } else {
    this.energyUsage = "high-usage";
  };
  return this.energyUsage;
};

Thermostat.prototype._isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM;
};

Thermostat.prototype._isMaximumTemperature = function() {
  return this.temperature === this._maximum;
};
