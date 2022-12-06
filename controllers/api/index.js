//imports
const router = require("express").Router();
const userRoutes = require("./user_routes");
const postRoutes = require("./");
const commentRoutes = require("./");
//turning on routing for possible CRUD operations on tables: User, Post and Comment
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;