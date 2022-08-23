const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedVote = require('./vote-seeds');
const seedComment = require('./comment-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USER SEEDED -----\n');
  
    await seedPost();
    console.log('\n----- POST SEEDED -----\n');
  
    await seedVote();
    console.log('\n----- VOTE SEEDED -----\n');
  
    await seedComment();
    console.log('\n----- COMMENT TAGS SEEDED -----\n');
  
    process.exit(0);
};

seedAll();
