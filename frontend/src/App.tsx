import CreateTask from "./components/CreateTask.tsx";
import ListOfTasks from "./components/ListOfTasks.tsx";
import {TaskContextProvider} from "./contexts/TaskContext.tsx";

function App() {
    return (
        <div>
            <TaskContextProvider>
                <CreateTask/>
                <ListOfTasks/>
            </TaskContextProvider>
        </div>
    );
}

export default App;
