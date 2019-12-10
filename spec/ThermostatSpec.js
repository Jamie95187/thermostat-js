'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should have default temperature 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('should increase temperature by 1 degree', function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should decrease temperatute by 1 degree', function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should not allow temperature to fall before 10", function(){
    for(var i = 0; i < 10; i++){
      thermostat.decrease();
    };
    expect(function() {thermostat.decrease()} ).toThrow('Warning minimum temperature')
  });

  it("has a default of true for the power saving mode", function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it("can switch PSM off", function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.powerSavingMode).toBeFalse();
  });

  it("can switch PSM on", function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.powerSavingMode).toBeFalse();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.powerSavingMode).toBeTrue();
  });

  it("should not allow temperature to rise above 25 when power saving mode is on", function(){
    for(var i = 0; i < 6; i++){
      thermostat.increase();
    };
    expect(thermostat.temperature).toEqual(25);
  });

  it("should not allow temperature to rise above 32 when power saving mode is off", function(){
    thermostat.switchPowerSavingModeOff();
    for(var i = 0; i < 13; i++){
      thermostat.increase();
    };
    expect(thermostat.temperature).toEqual(32);
  })

  it("should reset the temperature to 20", function(){
    thermostat.increase();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("should show low-usage if temperature is below 18", function(){
    for(var i = 0; i < 3; i++){
      thermostat.decrease();
    };
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
  });

  it("should show medium-usage if temperature is below 25 & over or equal to 18", function(){
    for(var i = 0; i < 3; i++){
      thermostat.decrease();
    };
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage");

    for(var i = 0; i < 5; i++){
      thermostat.increase();
    };
    expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
  });

  it("should show high-usage if temperature is above or equal to 25", function(){
    for(var i = 0; i < 10; i++){
      thermostat.increase();
    };
    expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
  });

});
