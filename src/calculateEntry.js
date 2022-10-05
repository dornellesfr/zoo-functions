const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (typeof entrants !== 'object') return 0;
  if (Object.values(entrants).length < 1) return 0;
  const child = entrants.filter((p) => p.age < 18).length;
  const adult = entrants.filter((p) => p.age > 17 && p.age < 50).length;
  const senior = entrants.filter((p) => p.age > 49).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  const people = Object.entries(countEntrants(entrants));
  const callback = (e) => {
    if (e[0] === 'child') {
      return e[1] * data.prices.child;
    } if (e[0] === 'adult') {
      return e[1] * data.prices.adult;
    } return e[1] * data.prices.senior;
  };
  return people.map(callback).reduce((a, c) => a + c, 0);
}

module.exports = { calculateEntry, countEntrants };
