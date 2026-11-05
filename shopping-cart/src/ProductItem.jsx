import React from 'react';

function ProductItem({ product, onAdd }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            marginBottom: '10px',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            border: '1px solid #e2e8f0'
        }}>
            <div>
                <strong style={{ color: '#2d3748', display: 'block' }}>{product.name}</strong>
                <span style={{ color: '#718096', fontSize: '14px' }}>{product.price.toFixed(2)} Eur</span>
            </div>
            <button
                onClick={() => onAdd(product)}
                style={{
                    padding: '8px 14px',
                    backgroundColor: '#3182ce',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                Pridėti į krepšelį
            </button>
        </div>
    );
}

export default ProductItem;
