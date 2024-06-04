import CreateTask from "./components/CreateTask.tsx";
import ListOfTasks from "./components/ListOfTasks.tsx";
import {TaskContextProvider} from "./contexts/TaskContext.tsx";

function App() {
    return (
            <TaskContextProvider>
                <CreateTask/>
                <ListOfTasks/>
            </TaskContextProvider>
    );
}

export default App;
