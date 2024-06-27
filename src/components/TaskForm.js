import React, { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'


const TaskForm = ({ taskToEdit, clearEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const { dispatch } = useContext(TaskContext);

    useEffect(() => {
        if(taskToEdit) {
            setTitle(taskToEdit.title || '');
            setDescription(taskToEdit.description || '');
            setCategory(taskToEdit.category || '');
        } else {
            setTitle('');
            setDescription('');
            setCategory('')
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { id: taskToEdit ? taskToEdit.id: Date.now(), title, description, category};
        if(taskToEdit) {
            dispatch({ type: 'EDIT_TASK', payload: newTask });
           // clearEdit();
        } else {
            dispatch({ type: 'ADD_TASK', payload: newTask });
        }
        setTitle('');
        setDescription('')
        setCategory('');
    };
  return (
   <form onSubmit={handleSubmit} className='p-4'>
    <input 
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border p-2 mb-2 w-full'
    />
    <textarea 
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='border p-2 mb-2 w-full'
    />
    <input 
        type='text'
        placeholder='Category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='border p-2 mb-2 w-full'
    />
    <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
        {taskToEdit ? 'Update Task' : 'Add Task'}
    </button>
   </form>
  )
}

export default TaskForm