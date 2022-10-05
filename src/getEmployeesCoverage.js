const data = require('../data/zoo_data');

const { species, employees } = data;

const animalById = (worker, nOrL) => {
  const lista = [];
  worker.forEach((e) => {
    const target = species.find((i) => i.id === e);
    lista.push(target[nOrL]);
  });
  return lista;
};

const all = () => {
  const arr = [];
  employees.forEach((e) => {
    const obj = {
      id: e.id,
      fullName: `${e.firstName} ${e.lastName}`,
      species: animalById(e.responsibleFor, 'name'),
      locations: animalById(e.responsibleFor, 'location'),
    };
    arr.push(obj);
  });
  return arr;
};

function getEmployeesCoverage(obj) {
  if (!obj) return all();
  const result = { id: '', fullName: '', species: '', locations: '' };
  let locate;
  if (obj.name) {
    locate = employees.find((e) => e.firstName === obj.name || e.lastName === obj.name);
  }
  if (obj.id) {
    locate = employees.find((e) => e.id === obj.id);
  }
  if (!locate) throw new Error('Informações inválidas');
  result.id = locate.id;
  result.fullName = `${locate.firstName} ${locate.lastName}`;
  result.species = animalById(locate.responsibleFor, 'name');
  result.locations = animalById(locate.responsibleFor, 'location');
  return result;
}

module.exports = getEmployeesCoverage;
