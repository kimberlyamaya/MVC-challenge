const { Comment } = require('../models');

const dbCommentData = [
  {
    body: 'body of comment 1',
    user_id: 1,
    blog_id: 1
  },
  {
    body: 'body of comment 2',
    user_id: 1,
    blog_id: 1
  },
  {
    body: 'body of comment 3',
    user_id: 1,
    blog_id: 2
  },
  {
    body: 'body of comment 4',
    user_id: 1,
    blog_id: 2
  },
  {
    body: 'body of comment 5',
    user_id: 2,
    blog_id: 2
  },
  {
    body: 'body of comment 6',
    user_id: 2,
    blog_id: 2
  },
  {
    body: 'body of comment 7',
    user_id: 2,
    blog_id: 3
  },
  {
    body: 'body of comment 8',
    user_id: 2,
    blog_id: 3
  },
  {
    body: 'body of comment 9',
    user_id: 3,
    blog_id: 3
  },
  {
    body: 'body of comment 10',
    user_id: 3,
    blog_id: 3
  },
  {
    body: 'body of comment 11',
    user_id: 3,
    blog_id: 4
  },
  {
    body: 'body of comment 12',
    user_id: 3,
    blog_id: 4
  },
  {
    body: 'body of comment 13',
    user_id: 4,
    blog_id: 4
  },
  {
    body: 'body of comment 14',
    user_id: 4,
    blog_id: 4
  }
];

const seedComment = () => Comment.bulkCreate(dbCommentData);

module.exports = seedComment;
