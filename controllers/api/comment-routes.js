const router = require("express").Router()
const { Comment, User, Blog } = require("../../models")

// GET api/comments
router.get("/", (req, res) => {
  console.log('======================');
  Comment.findAll({
    attributes: ["id", "body", "user_id", "blog_id", "createdAt", "updatedAt"],
    include: [{
        model: User,
        include: [{
          model: Blog
        }]
    }]
  })
  .then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// GET /api/comments/1
router.get("/:id", (req, res) => {
  Comment.findOne({
    where: {
        id: req.params.id
    }
  })
  .then(dbCommentData => {
    if (!dbCommentData) {
      res.status(404).json({ message: "No comment found with this id" })
      return
    }
    res.json(dbCommentData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// POST /api/comments
router.post("/", (req, res) => {
  Comment.create({
    body: req.body.body,
    user_id: req.body.user_id,
    blog_id: req.body.blog_id
  })
  .then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// PUT /api/comments/1
router.put("/:id", (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCommentData => {
    if (!dbCommentData[0]) {
      res.status(404).json({ message: "No comment found with this id" })
      return
    }
    res.json(dbCommentData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// DELETE /api/comments/1
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCommentData => {
    if (!dbCommentData) {
      res.status(404).json({ message: "No comment found with this id" })
      return
    }
    res.json(dbCommentData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

module.exports = router;