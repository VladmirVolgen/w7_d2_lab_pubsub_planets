const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetList = require('./views/planet_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const planetList = new PlanetList;
  planetList.bindEvents();
});
