const TaskService = require("./taskService");

const taskService = new TaskService()
module.exports = class TaskController {
    getTask = (req, res) => {
        try {
            const tasks = taskService.getTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
    postTask = (req, res) => {
        try {
            const task = req.body;
            const tasks = taskService.addTask(task);
            res.status(201).json(tasks);
        } catch (error) {
            if (error.message === "Invalid task") {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }

    }

    deleteTask = (req, res) => {
        try {
            const { id } = req.params;
            const deleted = taskService.deleteTask(id);
            res.json(deleted);
        } catch (error) {
            if(error.message === "Task not found"){
                res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    updateTask = (req, res) => {
        const {id} = req.params
        const dataToUpdate = req.body

        const updatedData = taskService.updateTask(id, dataToUpdate)

        res.json(updatedData);
    }
}
