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

  it("should return true if power saving mode is on", function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it("should have a maximum temperature of 25 when power saving mode is on", function(){
    expect(thermostat._maximum).toEqual(25);
  });
});
