import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (book) => {
        setFavorites((prevFavorites) => {
            if (!prevFavorites.find(item => item.id === book.id)) {
                return [...prevFavorites, book];
            }
            return prevFavorites;
        });
    };

    const removeFromFavorites = (bookId) => {
        setFavorites((prevFavorites) => prevFavorites.filter(item => item.id !== bookId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
