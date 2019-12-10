'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MINIMUM = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.temperature = this.DEFAULT_TEMP;
  this._maximum = this.MAX_TEMP_PSM_ON;
  this.powerSavingMode = true;
}

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
  this._maximum = this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
  this._maximum = this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "low-usage";
  } else if (this.temperature < this.MAX_TEMP_PSM_ON) {
    return "medium-usage";
  } else {
    return "high-usage";
  };
};

Thermostat.prototype._isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM;
};

Thermostat.prototype._isMaximumTemperature = function() {
  return this.temperature === this._maximum;
};
