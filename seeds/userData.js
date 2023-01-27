const { User } = require('../models');

const userdata = [
  {
    name: 'samwade',
    email: 'sam@email.com',
    password: 'password123'
  },
  {
    name: 'delphinetm',
    email: 'delphine@email.com',
    password: 'supersecretpass'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true
});

module.exports = seedUsers;