const { Blog } = require('../models');

const dbBlogData = [
  {
    title: 'title of blog post 1',
    body: 'body of blog post 1',
    user_id: 1
  },
  {
    title: 'title of blog post 2',
    body: 'body of blog post 2',
    user_id: 1
  },
  {
    title: 'title of blog post 3',
    body: 'body of blog post 3',
    user_id: 2
  },
  {
    title: 'title of blog post 4',
    body: 'body of blog post 4',
    user_id: 2
  },
  {
    title: 'title of blog post 5',
    body: 'body of blog post 5',
    user_id: 3
  },
  {
    title: 'title of blog post 6',
    body: 'body of blog post 6',
    user_id: 3
  },
  {
    title: 'title of blog post 7',
    body: 'body of blog post 7',
    user_id: 4
  },
  {
    title: 'title of blog post 8',
    body: 'body of blog post 8',
    user_id: 4
  }
];

const seedBlog = () => Blog.bulkCreate(dbBlogData);

module.exports = seedBlog;
