import {useContext} from "react";
import {TaskContext} from "../contexts/TaskContext.tsx";

export function useTask(){
    return useContext(TaskContext)
}
