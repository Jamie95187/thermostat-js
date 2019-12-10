'use strict';

function Thermostat(){
  this.temperature = 20;
  this._minimum = MINIMUM;
  this._maximum = 25;
  this.powerSavingMode = true;
}

const MINIMUM = 10;

Thermostat.prototype.increase = function(){
  this.temperature++;
};

Thermostat.prototype.decrease = function(){
  if(this.temperature === this._minimum){
    throw "Warning minimum temperature";
  } else {
    this.temperature--;
  };
};
