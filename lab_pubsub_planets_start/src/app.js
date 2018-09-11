const SolarSystem = require('./models/solar_system.js');
const PlanetList = require('./views/planet_list.js');
const PlanetDisplay = require('./views/planet_display.js')

document.addEventListener('DOMContentLoaded', () => {
  // const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);

  const planetList = new PlanetList;
  planetList.bindEvents();

  const solarSystem = new SolarSystem;
  solarSystem.bindEvents();

  const planetDisplay = new PlanetDisplay;
  planetDisplay.bindEvents();
});
