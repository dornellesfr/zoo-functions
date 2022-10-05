const data = require('../data/zoo_data');

const daysEx = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species.filter((a) => a.availability.includes('Tuesday')).map((i) => i.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species.filter((a) => {
      const c = a.availability;
      return c.includes('Wednesday');
    }).map((i) => i.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species.filter((a) => {
      const c = a.availability;
      return c.includes('Thursday');
    }).map((i) => i.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species.filter((a) => a.availability.includes('Friday')).map((i) => i.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species.filter((a) => {
      const c = a.availability;
      return c.includes('Saturday');
    }).map((i) => i.name),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species.filter((a) => a.availability.includes('Sunday')).map((i) => i.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const allAnimals = [
  'lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes',
];

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];

function getSchedule(scheduleTarget) {
  if (allAnimals.includes(scheduleTarget)) {
    const animal = () => data.species.find((a) => a.name === scheduleTarget).availability;
    return animal();
  } if (daysOfWeek.includes(scheduleTarget)) {
    const n = {};
    const b = Object.entries(daysEx).find((i) => i[0] === scheduleTarget);
    const [st, nd] = b;
    n[st] = nd;
    return n;
  }
  return daysEx;
}

module.exports = getSchedule;
