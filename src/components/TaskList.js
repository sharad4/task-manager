import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskForm from './TaskForm';

const TaskList = () => {
    const { tasks, dispatch } = useContext(TaskContext);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_TASK', payload: id});
    };

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const clearEdit = () => {
        setTaskToEdit(null);
    }

  return (
    <div className='p-4'>
        <TaskForm taskToEdit={taskToEdit} />

        {tasks && tasks.map((task) => (
            task && (
                <div key={task.id} className='bg-white shadow-md rounded-lg p-4 mb-4'>
                    <h3 className='text-xl font-bold'>{task.title}</h3>
                    <p>{task.description}</p>
                    <p className='text-gray-500'>Category: {task.category}</p>
                    <div className='flex space-x-2 justify-end'>
                        <button onClick={() => handleEdit(task)} className='bg-yellow-400 text-white p-2 rounded'>Edit</button>
                        <button onClick={() => handleDelete(task.id)} className='bg-red-500 text-white p-2 rounded'>Delete</button>
                    </div>
                </div>
            )
            
        ))}
    </div>
  )
}

export default TaskList