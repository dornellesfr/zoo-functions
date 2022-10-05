const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((a) => a.name === animal).residents.every((r) => r.age >= age);
}

console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
