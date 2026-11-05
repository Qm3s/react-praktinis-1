import React, { useState } from 'react';

function TaskForm({ onAdd }) {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) {
            setError('Užduoties tekstas negali būti tuščias!');
            return;
        }
        setError('');
        onAdd(trimmed);
        setText('');
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Įveskite naują užduotį..."
                    style={{
                        flex: '1',
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e0',
                        fontSize: '14px'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 18px',
                        backgroundColor: '#38a169',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Pridėti užduotį
                </button>
            </form>
            {error && (
                <p style={{ color: '#e53e3e', marginTop: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                    {error}
                </p>
            )}
        </div>
    );
}

export default TaskForm;
