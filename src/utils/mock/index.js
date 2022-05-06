const faker = require('faker');
const _ = require('lodash');

module.exports = function() {
  return {
    events: _.times(200, (n) => ({
      id: n,
      name: faker.company.catchPhrase(),
      dateTime: faker.datatype.datetime(),
      duration: faker.datatype.number({
        min: 30,
        max: 180,
        precision: 30,
      }),
      language: faker.helpers.randomize(['en', 'fr']),
      interestCategory: faker.helpers.randomize(['Manufacturing', 'Sales', 'Engineering', 'Event Planning', 'Analytics', 'Human Resources', 'Business Services']),
      hasVideo: faker.helpers.randomize([true, false]),
      hasSlides: faker.helpers.randomize([true, false]),
      Attendees: faker.datatype.number({
        min: 1,
        max: 99999,
        precision: 1,
      }),
    })),
  }
}