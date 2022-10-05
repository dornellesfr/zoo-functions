const data = require('../data/zoo_data');

const { species } = data;

const namA = (key, sex, sor) => {
  const obj = {};
  obj[key.name] = key.residents.map((i) => i.name);
  if (!sex && sor) obj[key.name] = key.residents.map((i) => i.name).sort();
  if (sex) {
    obj[key.name] = key.residents.filter((b) => b.sex === sex).map((j) => j.name).sort();
    if (!sor) obj[key.name] = key.residents.filter((b) => b.sex === sex).map((j) => j.name);
  }
  return obj;
};

const includingSpecies = (obj, names = false, sex = false, sort = false) => {
  const object = obj;
  const objKeys = Object.keys(obj);
  if (names) {
    objKeys.forEach((key) => {
      object[key] = species.filter((a) => a.location === key).map((sA) => namA(sA, sex, sort));
    });
  } else {
    objKeys.forEach((e) => {
      object[e] = species.filter((animal) => animal.location === e).map((element) => element.name);
    });
  }
  return object;
};

const sexExist = (opt, obj) => {
  if (opt.sex) {
    includingSpecies(obj, true, opt.sex, opt.sorted);
  } else if (opt.sorted) {
    includingSpecies(obj, true, opt.sex, opt.sorted);
  } else if (opt.sex && opt.sorted) {
    includingSpecies(obj, true, opt.sex, opt.sorted);
  } else includingSpecies(obj, true);
};

function getAnimalMap(options) {
  const obj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if (!options || !(options.includeNames)) includingSpecies(obj);
  else sexExist(options, obj);
  return obj;
}

console.log(JSON.stringify(getAnimalMap({ includeNames: true, sex: 'female' })));

module.exports = getAnimalMap;
