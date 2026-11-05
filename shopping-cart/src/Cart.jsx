import React from 'react';

function Cart({ cart, onRemove }) {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
        }}>
            <h3 style={{ color: '#2d3748', marginTop: 0, borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>
                Krepšelis
            </h3>
            {cart.length === 0 ? (
                <div>
                    <p style={{ color: '#718096', fontStyle: 'italic' }}>Krepšelis tuščias.</p>
                    <p style={{ fontWeight: 'bold', color: '#2d3748' }}>Bendram suma: 0,00 Eur</p>
                </div>
            ) : (
                <div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
                        {cart.map(item => {
                            const lineTotal = item.price * item.quantity;
                            return (
                                <li key={item.id} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px 0',
                                    borderBottom: '1px solid #edf2f7'
                                }}>
                                    <div>
                                        <span style={{ fontWeight: 'bold', color: '#2d3748' }}>{item.name}</span>
                                        <br />
                                        <small style={{ color: '#718096' }}>
                                            {item.price.toFixed(2)} Eur x {item.quantity} = {lineTotal.toFixed(2)} Eur
                                        </small>
                                    </div>
                                    <button
                                        onClick={() => onRemove(item.id)}
                                        style={{
                                            padding: '4px 10px',
                                            backgroundColor: '#e53e3e',
                                            color: '#ffffff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '12px'
                                        }}
                                    >
                                        Pašalinti iš krepšelio
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div style={{
                        textAlign: 'right',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#2b6cb0',
                        borderTop: '2px solid #e2e8f0',
                        paddingTop: '10px'
                    }}>
                        Bendras suma: {totalPrice.toFixed(2)} Eur
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
