const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: "Wow! What a creative way to use React.",
        user_id: 2,
        post_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;