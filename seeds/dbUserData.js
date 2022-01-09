const { User } = require('../models');

const dbUserData = [
  {
    email: 'kim@email.com',
    username: 'kamaya',
    password: 'kimpass'
  },
  {
    email: 'tom@email.com',
    username: 'toconnor',
    password: 'tompass'
  },
  {
    email: 'ana@email.com',
    username: 'alopez',
    password: 'anapass'
  },
  {
    email: 'jp@email.com',
    username: 'jarrop',
    password: 'jppass'
  },
];

const seedUser = () => User.bulkCreate(dbUserData);

module.exports = seedUser;
