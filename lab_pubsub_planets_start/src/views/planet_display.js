const PubSub = require('../helpers/pub_sub.js');

const PlanetDisplay = function() {

};
// {
//   name: 'Mercury',
//   orbit: 87.969,
//   day: 58.646,
//   surfaceArea: 0.147,
//   volume: 0.056,
//   gravity: 0.38,
//   moons: 0,
//   image: 'images/mercury.jpg'
// },
PlanetDisplay.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:planet-info', () => {
    const resultOut = event.detail;
    this.displayResult(resultOut);
  });
};

PlanetDisplay.prototype.displayResult = function (info) {
  const display = document.querySelector('.planet-details');
  display.textContent = info;
};

module.exports = PlanetDisplay;
