import React, { createContext, useReducer } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'EDIT_TASK':
            return state.map(task => task.id === action.payload.id ? action.paylaod : task);
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'CATEGORIZE_TASK':
            return state.map(task => task.id === action.payload.id ? { ...task, category: action.payload.category } : task);
            default:
                return state;
    }
};

const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };