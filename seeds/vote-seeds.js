const { Vote } = require('../models');

const VoteData = [
    {
        user_id: 1,
        post_id: 1
    },
    {
        user_id: 1,
        post_id: 2
    }
];

const seedVote = () => Vote.bulkCreate(VoteData);

module.exports = seedVote;