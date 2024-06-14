import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import CategoriesScreen from './screens/CategoriesScreen'; // Adjust the import path as necessary
import MainLayout from './screens/MainLayout';
import AllBooksScreen from './screens/AllBooksScreen';
import BookDetailScreen from './screens/BookDetailScreen';
import BestSellersScreen from './screens/BestSellersSreen';
import CategoryBooksScreen from './screens/CategoryBooksScreen';
import SearchScreen from './screens/SearchScreen';
import CartScreen from './screens/CartScreen';
import { CartProvider } from './screens/CartContext';
import { FavoritesProvider } from './screens/FavoritesContext';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AllBooks" component={AllBooksScreen} options={{ title: 'Tüm Kitaplar' }} />
            <Stack.Screen name="BookDetail" component={BookDetailScreen} options={({ route }) => ({ title: route.params.book.book_name })} />
            <Stack.Screen name="BestSellers" component={BestSellersScreen} options={{ title: 'Çok Satanlar' }} />
            <Stack.Screen
              name="CategoryBooks"
              component={CategoryBooksScreen}
              options={({ route }) => ({ title: route.params.category })}
            />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
