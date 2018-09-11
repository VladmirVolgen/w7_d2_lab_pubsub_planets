const PubSub = require('../helpers/pub_sub.js');

const PlanetList = function(){
  // this.element = element;
};



PlanetList.prototype.bindEvents = function () {
  const planetSelected = document.querySelector('.planets-menu');
  planetSelected.addEventListener('click', (event) => {
    console.log(event.target.id);
    const planet = document.querySelector(`#${event.target.id}`);
    console.log(planet);
    PubSub.publish('PlanetList:select', planet)
  })
};

module.exports = PlanetList;
