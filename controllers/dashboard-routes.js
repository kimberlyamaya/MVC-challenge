const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Blog.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      "id",
      "title",
      "body",
      "user_id",
      "created_at"
    ],
    include: [
      {
        model: Comment,
         attributes: ["id", "body", "user_id", "blog_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"]
        }
      },
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
    .then(dbBlogData => {
      const blog = dbBlogData.map(blog => blog.get({ plain: true }));
      res.render('dashboard', { blog, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;