const data = require('../data/zoo_data');

function countAnimals(animal) {
  const n = {};
  if (typeof animal === 'undefined') {
    data.species.forEach((a) => { n[a.name] = a.residents.length; });
    return n;
  } const espAnimal = data.species.find((i) => i.name === animal.specie);
  if (typeof animal.sex === 'undefined') return espAnimal.residents.length;
  return espAnimal.residents.reduce((a, c) => (c.sex === animal.sex ? a + 1 : a), 0);
}

module.exports = countAnimals;
