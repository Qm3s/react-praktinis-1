import React from 'react';

function TaskItem({ task, onToggleComplete, onDelete }) {
    const isCompleted = task.state === 'completed';

    return (
        <li style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            marginBottom: '8px',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
            <span style={{
                textDecoration: isCompleted ? 'line-through' : 'none',
                color: isCompleted ? '#a0aec0' : '#2d3748',
                fontWeight: '500'
            }}>
                {task.text} {isCompleted && <strong style={{ color: '#38a169', marginLeft: '6px' }}>(Atlikta)</strong>}
            </span>
            <div>
                <button
                    onClick={() => onToggleComplete(task.id)}
                    disabled={isCompleted}
                    style={{
                        padding: '6px 12px',
                        marginRight: '8px',
                        backgroundColor: isCompleted ? '#cbd5e0' : '#3182ce',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isCompleted ? 'not-allowed' : 'pointer'
                    }}
                >
                    Pažymėti kaip atliktą
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#e53e3e',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Ištrinti
                </button>
            </div>
        </li>
    );
}

export default TaskItem;
