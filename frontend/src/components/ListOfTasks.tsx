import {http} from "../http/httpCalls.ts";
import {useTask} from "../customHooks/useTask.tsx";
import {useState} from "react";
import TaskForm from "./TaskForm.tsx";
import {toast} from "react-toastify";

export default function ListOfTasks() {
const {setTasks, tasks} = useTask()
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState(0)

    const deleteTask = async (id: number) => {
        try {
            await http.delete(`/tasks/${id}`)
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
        } catch (e:any) {

            console.log(e.message)
            toast.error(
                e.message
            );
        }
    };

    const editTask = (event: number)=>{
        setId(event)
        setIsEdit(prev => !prev)
    }


    return(
        <>
            <h1>Task Management App</h1>
                 {isEdit && (
                     <TaskForm onFinishEdit={()=>setIsEdit(false)} id={id}/>
                 )}
                    {tasks!.map(task => (
                        <div key={task.id} style={{border:"2px solid #ffffff", marginTop: "10px"}}>
                                <div style={{
                                    display:"flex",
                                    alignItems:"center",
                                    gap: "10px",
                                    width: "5em",
                                    minWidth:"100%",
                                }}>
                                    <h3 style={{marginLeft:"5%", width:"25%"}}>{task.title}</h3>
                                    <p style={{ width:"35%"}}>{task.description}</p>
                                    <button style={{height:"3rem", backgroundColor:"red"}} onClick={() => deleteTask(task.id)}>Delete</button>
                                    <button style={{height:"3rem", backgroundColor:"blue"}} onClick={() => editTask(task.id)}>Edit</button>
                                </div>
                        </div>
                    ))}
    </>)
}
