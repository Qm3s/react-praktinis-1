import React from 'react';

function GuessForm({ value, onChange, onSubmit, disabled }) {
    return (
        <form onSubmit={onSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                placeholder="Įveskite skaičių (1-100)"
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
                disabled={disabled}
                style={{
                    padding: '10px 20px',
                    backgroundColor: disabled ? '#cbd5e0' : '#805ad5',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: disabled ? 'not-allowed' : 'pointer'
                }}
            >
                Spėti
            </button>
        </form>
    );
}

export default GuessForm;
