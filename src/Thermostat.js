'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM = 10;
  this._maximum = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.increase = function(){
  this.temperature++;
};

Thermostat.prototype.decrease = function(){
  if(this.temperature === this.MINIMUM){
    throw "Warning minimum temperature";
  } else {
    this.temperature--;
  };
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
  this._maximum = 32;
};

// Thermostat.prototype._isPowerSaving = function () {
//   if(this.powerSavingMode === true){
//     return 25;
//   } else if(this.powerSavingMode === false){
//     return 32;
//   };
// };
