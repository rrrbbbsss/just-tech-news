const { User } = require('../models');

const UserData = [
    {
        username: "ali",
        email: "ali@ali.ali",
        password: "1234"
    },
    {
        username: "bob",
        email: "bob@bob.bob",
        password: "4321"
    }
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;