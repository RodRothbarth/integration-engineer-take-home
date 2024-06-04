import TaskForm from "./components/TaskForm.tsx";
import ListOfTasks from "./components/ListOfTasks.tsx";
import {TaskContextProvider} from "./contexts/TaskContext.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
            <TaskContextProvider>
                <TaskForm/>
                <ListOfTasks/>
                <ToastContainer/>
            </TaskContextProvider>
    );
}

export default App;
