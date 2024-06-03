import {useState, useEffect} from 'react';
import {http} from "./http/httpCalls.ts";
import {Task} from "./types.ts";
import {useForm,  type FieldValues} from "react-hook-form";
import {AxiosResponse} from "axios";

function App() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm()

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const tasks: AxiosResponse<Task[]> = await http.get("/tasks")
            setTasks(tasks.data);
        } catch (e) {
            console.log(e)
        }
    };

    /* Complete the following functions to hit endpoints on your server */

    const onSubmit = async (data:FieldValues)=>{
      const newTask:AxiosResponse<Task> = await http.post("/tasks", data)
        setTasks(prevState => [...prevState, newTask.data])
        reset()
    }

    const deleteTask = async (id: number) => {
        try {
            await http.delete(`/tasks/${id}`)
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
        } catch (e) {
            console.log(e)
        }
    };


    return (
        <div>
            <h1>Task Management App</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Create Task</h2>
                    <input
                        {...register("title", {
                            required: "Tile is required",
                            minLength: {value: 3, message: "Title should have at least 3 characters"}
                        })}
                        type="text"
                        placeholder="Title"
                    />
                    {errors.title &&(
                        <span>{`${errors.title.message}`}</span>
                    )}
                    <input
                        {...register("description", {required: "Description is required"})}
                        type="text"
                        placeholder="Description"
                    />
                    {errors.description &&(
                        <span>{`${errors.description.message}`}</span>
                    )}
                    <button disabled={isSubmitting}>Create</button>
                </form>
            </div>
        </div>
    );
}

export default App;
