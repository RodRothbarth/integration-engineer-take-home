tasks = [];
nextId = 1;
module.exports = class TaskService {

    getTasks = () => {
        return tasks}

    addTask = (task)=>{
        if (!this.isValidTask(task)) {
            throw new Error("Invalid task");
        }

        task.id = nextId
        nextId++
        tasks.push(task)
        return task
    }

    deleteTask = (taskId)=>{
        const idToDelete = parseInt(taskId)
        if (!idToDelete || isNaN(idToDelete)) {
            throw new Error("Invalid task ID");
        }
        const indexToDelete = tasks.findIndex(task => task.id === idToDelete);

        if (indexToDelete === -1) {
            throw new Error("Task not found");
        }

        tasks.splice(indexToDelete, 1);

        return tasks
    }

    updateTask = (taskId, toUpdateTaskData)=>{
        const numberId = parseInt(taskId)

        if (!this.isValidTask(toUpdateTaskData)) {
            throw new Error("Invalid task");
        }

        if(!numberId || isNaN(numberId)){
            throw new Error("Invalid task ID");
        }

        const indexToUpdate = tasks.findIndex(task => task.id === numberId)
        if(indexToUpdate === -1){
            throw Error("Task not found")
        }else{
            tasks[indexToUpdate] = { ...toUpdateTaskData, id: numberId };

            return tasks[indexToUpdate];
        }
    }

    isValidTask = (task) => {
        return task && task.title && task.description;
    };

}
