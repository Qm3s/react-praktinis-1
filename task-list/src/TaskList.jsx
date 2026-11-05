import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TaskList() {
    // Statinis pradinis masyvas pagal tavo pateiktą struktūrą
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Task 1', state: 'completed' },
        { id: 2, text: 'Task 2', state: 'incomplete' },
        { id: 3, text: 'Task 3', state: 'incomplete' }
    ]);

    const handleAddTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            state: 'incomplete'
        };
        setTasks([...tasks, newTask]);
    };

    const handleToggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, state: 'completed' } : task
        ));
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div style={{
            maxWidth: '550px',
            margin: '40px auto',
            padding: '24px',
            backgroundColor: '#f7fafc',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            fontFamily: 'sans-serif'
        }}>
            <h2 style={{ color: '#2d3748', textAlign: 'center', marginBottom: '20px' }}>
                A dalis: Užduočių sąrašas
            </h2>
            <TaskForm onAdd={handleAddTask} />
            {tasks.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#718096', fontStyle: 'italic' }}>
                    Užduočių dar nėra.
                </p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggleComplete={handleToggleComplete}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;
