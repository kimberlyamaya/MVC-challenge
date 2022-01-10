const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Blog.findAll({
    attributes: ["id", "title", "body", "user_id", "created_at" //"blog_url",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "body", "user_id", "blog_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"]
        }
      }
      /*{
        model: User,
        attributes: ["username"]
      }*/
    ]
  })
  .then(dbBlogData => {
    const blogs = dbBlogData.map(blog => blog.get({ plain: true }))
    res.render("homepage", { blogs })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

module.exports = router;