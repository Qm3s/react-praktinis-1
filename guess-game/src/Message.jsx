import React from 'react';

function Message({ message, isError, isWin }) {
    if (!message) return null;

    let textColor = '#2d3748';
    if (isError) textColor = '#e53e3e';
    if (isWin) textColor = '#38a169';

    return (
        <div style={{
            padding: '12px',
            borderRadius: '6px',
            backgroundColor: isError ? '#fff5f5' : (isWin ? '#f0fff4' : '#ebf8ff'),
            border: `1px solid ${isError ? '#feb2b2' : (isWin ? '#9ae6b4' : '#bee3f8')}`,
            color: textColor,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '15px'
        }}>
            {message}
        </div>
    );
}

export default Message;
