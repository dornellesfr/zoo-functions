const data = require('../data/zoo_data');

function isManager(id) {
  if (data.employees.find((n) => n.id === id).managers.length < 2) return true;
  return false;
}

const listOfManager = (a) => data.employees.filter((i) => i.managers.includes(a)).map((person) => {
  const s = person.firstName;
  const n = person.lastName;
  return `${s} ${n}`;
});

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return listOfManager(managerId);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
