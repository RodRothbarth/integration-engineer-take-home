import CreateTask from "./components/CreateTask.tsx";
import ListOfTasks from "./components/ListOfTasks.tsx";
import {TaskContextProvider} from "./contexts/TaskContext.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
            <TaskContextProvider>
                <CreateTask/>
                <ListOfTasks/>
                <ToastContainer/>
            </TaskContextProvider>
    );
}

export default App;
