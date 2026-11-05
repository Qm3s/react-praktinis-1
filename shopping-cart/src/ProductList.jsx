import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onAdd }) {
    return (
        <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>
                Prekės
            </h3>
            {products.map(product => (
                <ProductItem key={product.id} product={product} onAdd={onAdd} />
            ))}
        </div>
    );
}

export default ProductList;
