import {FieldValues, useForm} from "react-hook-form";
import {AxiosResponse} from "axios";
import {Task} from "../types.ts";
import {http} from "../http/httpCalls.ts";
import {useTask} from "../customHooks/useTask.tsx";

export default function CreateTask() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm()

    const {setTasks} = useTask()

    const onSubmit = async (data:FieldValues)=>{
        const newTask:AxiosResponse<Task> = await http.post("/tasks", data)
        setTasks(prevState => [...prevState, newTask.data])
        reset()
    }

    return (
        <>
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
        </>
    )
}
