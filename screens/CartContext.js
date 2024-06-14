import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart((prevCart) => {
            const existingBook = prevCart.find(item => item.id === book.id);
            if (existingBook) {
                return prevCart.map(item =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...book, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (bookId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== bookId));
    };

    const updateQuantity = (bookId, quantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === bookId ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
