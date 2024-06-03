const express = require('express');
const TaskController = require("./taskController")

const router = express.Router();

const taskController = new TaskController()

router.route("/")
    .get(taskController.getTask)
    .post(taskController.postTask)

router.route("/:id")
    .delete(taskController.deleteTask)
    .put(taskController.updateTask)


module.exports = router

