const PubSub = require('../helpers/pub_sub.js');

const PlanetDisplay = function() {

};

PlanetDisplay.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:planet-info', () => {
    const resultOut = event.detail;
    this.displayResult(resultOut);
  });
};

PlanetDisplay.prototype.displayResult = function (info) {
  const display = document.querySelector('.planet-details');
  display.innerHTML = this.render(info);
};

PlanetDisplay.prototype.render = function (object) {
  return `<ul>
            <li>Name: ${object.name}</li>
            <li>Orbit: ${object.orbit}</li>
            <li>Day: ${object.day}</li>
            <li>Surface Area: ${object.surfaceArea}</li>
            <li>Volume: ${object.volume}</li>
            <li>Gravity: ${object.gravity}</li>
            <li>Moons: ${object.moons}</li>
            <li><img src="${object.image}" width=10% height=10%></li>
          </ul>
          `
};

module.exports = PlanetDisplay;
