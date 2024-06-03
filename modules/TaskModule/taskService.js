
tasks = [];
nextId = 1;
module.exports = class TaskService {

    getTasks = () => {
        return tasks}

    addTask = (task)=>{
        task.id = nextId
        nextId++
        tasks.push(task)
        return task
    }

    deleteTask = (taskId)=>{
        const idToDelete = parseInt(taskId)
       tasks = tasks.filter(task => task.id !== idToDelete)
        return tasks
    }

    updateTask = (taskId, toUpdateTaskData)=>{
        console.log(tasks)
        const numberId = parseInt(taskId)

        const indexToUpdate = tasks.findIndex(task => task.id === numberId)
        if(indexToUpdate !== -1){
            tasks[indexToUpdate] = { ...toUpdateTaskData, id: numberId };

            return "ok";
        }else{
            console.log("deu ruim")
            return "deu ruims"
        }
    }

}
