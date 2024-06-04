import {http} from "../http/httpCalls.ts";
import {useTask} from "../customHooks/useTask.tsx";

export default function ListOfTasks() {
const {setTasks, tasks} = useTask()

    const deleteTask = async (id: number) => {
        try {
            await http.delete(`/tasks/${id}`)
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
        } catch (e) {
            console.log(e)
        }
    };


    return(
        <>
            <h1>Task Management App</h1>
            <ul>
                {tasks!.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
    </>)
}
