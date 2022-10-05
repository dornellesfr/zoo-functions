const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => {
    if (id === '') return [];
    return data.species.find((specie) => specie.id === id);
  });
}

module.exports = getSpeciesByIds;
