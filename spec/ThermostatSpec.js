'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should have default temperature 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  })

  // it('should have increase temperature by 1 degree', function(){
  //   expect(thermosta)
  // })
});
