import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
    const [products] = useState([
        { id: 1, name: 'Knyga "React JS pagrindai"', price: 15.99 },
        { id: 2, name: 'Belaidė pelė', price: 24.50 },
        { id: 3, name: 'Kava 1kg', price: 12.00 }
    ]);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const existingIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingIndex] = {
                    ...updatedCart[existingIndex],
                    quantity: updatedCart[existingIndex].quantity + 1
                };
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: '40px auto',
            padding: '24px',
            backgroundColor: '#f7fafc',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            fontFamily: 'sans-serif'
        }}>
            <h2 style={{ color: '#2d3748', textAlign: 'center', marginBottom: '20px' }}>
                B dalis: Krepšelio sistema
            </h2>
            <ProductList products={products} onAdd={handleAddToCart} />
            <Cart cart={cart} onRemove={handleRemoveFromCart} />
        </div>
    );
}

export default App;
