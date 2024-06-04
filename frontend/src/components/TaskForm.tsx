import {FieldValues, useForm} from "react-hook-form";
import {AxiosResponse} from "axios";
import {Task} from "../types.ts";
import {http} from "../http/httpCalls.ts";
import {useTask} from "../customHooks/useTask.tsx";
import {toast} from "react-toastify";

type TaskForm = {
    editTask?: Task
    onFinishEdit?: () => void
}

export default function TaskForm({editTask, onFinishEdit}: TaskForm) {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm({defaultValues: {"title": editTask?.title, "description": editTask?.description}})

    const {setTasks} = useTask()

    const onSubmit = async (data: FieldValues) => {
        if (!editTask) {
            await createTask(data)
        } else {
            await updateTask(data, editTask.id)
        }
    }

    const createTask = async (data: FieldValues) => {
        try{
            const newTask: AxiosResponse<Task> = await http.post("/tasks", data)
            setTasks(prevState => [...prevState, newTask.data])
            reset()
        }catch (e:any) {
            toast.error(
                e.message
            );
        }
    }

    const updateTask = async (data: FieldValues, id: number) => {
       try{
           const newTask: AxiosResponse<Task> = await http.put(`/tasks/${id}`, data)
           setTasks((prevState: Task[]) => {
               return prevState.map((task: Task) => {
                   if (task.id === id) {
                       return {...newTask.data, id}
                   } else {
                       return task
                   }
               })
           })
           if (onFinishEdit) {
               onFinishEdit()
           }
           reset()
       }catch (e: any) {
           toast.error(
               e.message
           );
       }
    }

    return (
        <>
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>{editTask ? "Edit Task" : "Create Task"}</h2>
                   <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                       <div style={{display:"flex", flexDirection:"column"}}>
                           <input
                               style={{
                                   padding: "5px",
                                   fontSize: "16px",
                                   borderWidth:" 1px",
                                   borderColor: "#CCCCCC",
                                   backgroundColor: "#FFFFFF",
                                   color: "#000000",
                                   borderStyle: "solid",
                                   borderRadius: "18px",
                                   marginRight: "10px"
                               }}
                               {...register("title", {
                                   required: "Tile is required",
                                   minLength: {value: 3, message: "Title should have at least 3 characters"}
                               })}
                               maxLength={10}
                               type="text"
                               placeholder="Title"
                           />
                           {errors.title && (
                               <span style={{color:"red"}}>{`${errors.title.message}`}</span>
                           )}
                       </div>
                       <div style={{display:"flex", flexDirection:"column"}}>
                           <input
                               style={{
                                   padding: "5px",
                                   fontSize: "16px",
                                   borderWidth:" 1px",
                                   borderColor: "#CCCCCC",
                                   backgroundColor: "#FFFFFF",
                                   color: "#000000",
                                   borderStyle: "solid",
                                   borderRadius: "18px",
                                   marginRight: "10px"
                               }}
                               {...register("description", {required: "Description is required"})}
                               maxLength={15}
                               type="text"
                               placeholder="Description"
                           />
                           {errors.description && (
                               <span style={{color:"red"}}>{`${errors.description.message}`}</span>
                           )}
                       </div>
                       <button style={{height:"3rem", backgroundColor: editTask ? "blue":"green"}} disabled={isSubmitting}>{editTask ? "Edit" : "Create"}</button>
                   </div>

                </form>
            </div>
        </>
    )
}
