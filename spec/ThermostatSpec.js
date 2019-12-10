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
});
