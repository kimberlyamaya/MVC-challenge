const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
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
      },
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
  .then(dbBlogData => {
    const blogs = dbBlogData.map(blog => blog.get({ plain: true }))
    res.render("homepage", { blogs, loggedIn: req.session.loggedIn })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// can I add the same login route for sign up here?
router.get("/signup", (req, res) => {
  
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/blog/:id", (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id
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
      if (!dbBlogData) {
        res.status(404).json({ message: "No blog found with this id" });
        return;
      }

      const blog = dbBlogData.get({ plain: true });

      res.render("single-post", { blog, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;  