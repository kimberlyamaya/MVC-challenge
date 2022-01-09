const sequelize = require("../config/connection")
const seedUser = require("./dbUserData")
const seedBlog = require("./dbBlogData")
const seedComment = require("./dbCommentData")

const seedAll = async () => {
  await sequelize.sync({ force: true })

  await seedUser()
  await seedBlog()
  await seedComment()

  process.exit(0)
};

seedAll();