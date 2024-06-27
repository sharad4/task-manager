import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-center mb-4">Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
