const PubSub = require('../helpers/pub_sub.js');
const planets = require('../data/planets.js');


const SolarSystem = function() {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('PlanetList:select', (event) => {
    const planetSelected = event.detail;
    const result = planetSelected; //this.prepareDisplay();
    console.log(result);
    PubSub.publish('Planets:planet-info', result);
  })
};
//
// SolarSystem.prototype.prepareDisplay = function () {
//   console.log(result);
// };


module.exports = SolarSystem;
