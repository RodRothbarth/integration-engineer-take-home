import React, {createContext, ReactNode, useEffect, useState} from "react";
import {Task} from "../types.ts";
import {AxiosResponse} from "axios";
import {http} from "../http/httpCalls.ts";

type TaskContextDataProp = {
    tasks:  Task[] | null;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

type TaskContextProviderProps = {
    children: ReactNode;
};
export const TaskContext = createContext({} as TaskContextDataProp)

export function TaskContextProvider({children}:TaskContextProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = async () => {
        try {
            const tasks: AxiosResponse<Task[]> = await http.get("/tasks")
            setTasks(tasks.data);
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return(<TaskContext.Provider value={{tasks, setTasks}}>{children}</TaskContext.Provider>)
}
