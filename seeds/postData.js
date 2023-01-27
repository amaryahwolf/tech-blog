const { Post } = require('../models');

const postdata = [
    {
        title: "React.js Memory Card Game",
        content: "React is a popular JavaScript library that is commonly used for building user interfaces. Recently, I built a memory game using React. The game is a simple, yet challenging, game where the user has to match pairs of cards. The game board is made up of a grid of cards, each of which has an image on one side and a plain color on the other. The user has to flip over the cards to reveal the images and try to find the matching pairs. I used state in React to keep track of the game's progress, such as which cards have been flipped over and whether the game has been won or lost. I also used props to customize the game, such as the number of cards and the images used. Overall, building the memory game with React was a great experience. The use of state and props made it easy to manage the game's data and customize it to the user's preferences. I also learned a lot about React's lifecycle methods and how they can be used to control the game's behavior. I hope that others will find this game as fun and challenging as I did.",
        user_id: 1,
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;