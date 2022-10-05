const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  return data.employees.find((w) => w.firstName === employeeName || w.lastName === employeeName);
}

module.exports = getEmployeeByName;
