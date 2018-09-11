const PubSub = require('../helpers/pub_sub.js');
const planets = require('../data/planets.js');


const SolarSystem = function() {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('PlanetList:select', (event) => {
    const planetSelected = event.detail.id;
    const result = this.prepareDisplay(planetSelected);
    console.log(result);
    PubSub.publish('Planets:planet-info', result);
  })
};

SolarSystem.prototype.prepareDisplay = function (info) {
  const planet = this.planets.find(function(item){
    return info === item.name
  });
  return planet;
};


module.exports = SolarSystem;
