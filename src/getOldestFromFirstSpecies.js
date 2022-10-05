const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const oldestAnimal = data.employees.find((p) => p.id === id).responsibleFor[0];
  return Object.values(data.species.find((b) => b.id === oldestAnimal).residents.reduce((a, c) => {
    if (c.age > a.age) {
      return c;
    } return a;
  }));
}

module.exports = getOldestFromFirstSpecies;
