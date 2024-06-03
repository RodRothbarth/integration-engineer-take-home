const TaskService = require("./taskService");

const taskService = new TaskService()
module.exports = class TaskController {
    getTask = (req, res) => {
      const tasks =  taskService.getTasks()
        res.json(tasks);
    }
    postTask = (req, res) => {
        const task = req.body
        const tasks = taskService.addTask(task)
        res.json(tasks);
    }
    deleteTask = (req, res) => {
        const {id} = req.params
        const deleted = taskService.deleteTask(id)
        res.json(deleted);
    }

    updateTask = (req, res) => {
        const {id} = req.params
        const dataToUpdate = req.body

        const updatedData = taskService.updateTask(id, dataToUpdate)

        res.json(updatedData);
    }
}
