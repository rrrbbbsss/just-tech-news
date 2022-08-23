const { Post } = require('../models');

const PostData = [
    {
        title: "wha",
        post_url: "wha.wha.wha",
        user_id: 1
    },
    {
        title: "wow",
        post_url: "wow.wow.wow",
        user_id: 1
    },
    {
        title: "huh",
        post_url: "huh.huh.huh",
        user_id: 2
    }
];

const seedPost = () => Post.bulkCreate(PostData);

module.exports = seedPost;