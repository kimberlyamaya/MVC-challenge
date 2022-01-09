const router = require("express").Router()
const { Blog, User } = require("../../models")

// GET api/blogs
router.get("/", (req, res) => {
  Blog.findAll({
    attributes: ["id", "title", "body", "user_id", "createdAt", "updatedAt"],
    include: [{
        model: User
    }]
  })
  .then(dbBlogData => res.json(dbBlogData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// GET api/blogs/1
router.get("/:id", (req, res) => {
  Blog.findOne({
    where: {
        id: req.params.id
    }
  })
  .then(dbBlogData => {
    if (!dbBlogData) {
      res.status(404).json({ message: "No blog found with this id" })
      return
    }
    res.json(dbBlogData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// POST api/blogs
router.post("/", (req, res) => {
  Blog.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.body.user_id
  })
  .then(dbBlogData => res.json(dbBlogData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// PUT /api/blogs/1
router.put("/:id", (req, res) => {
  Blog.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbBlogData => {
    if (!dbBlogData[0]) {
      res.status(404).json({ message: "No blog found with this id" })
      return
    }
    res.json(dbBlogData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// DELETE /api/blogs/1
router.delete("/:id", (req, res) => {
  Blog.destroy({
      where: {
        id: req.params.id
      }
  })
  .then(dbBlogData => {
    if (!dbBlogData) {
      res.status(404).json({ message: "No blog found with this id" })
      return
    }
    res.json(dbBlogData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

module.exports = router;