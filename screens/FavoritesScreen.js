import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation from '../BottomNavigation'; // Adjust the import path as necessary
import { FavoritesContext } from './FavoritesContext';

const FavoritesScreen = ({ navigation }) => {
    const { favorites, removeFromFavorites } = useContext(FavoritesContext);

    const renderFavoriteItem = ({ item }) => (
        <View style={styles.favoriteItem}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <View style={styles.bookDetails}>
                <Text style={styles.bookName}>{item.book_name}</Text>
                <Text style={styles.bookPrice}>{parseFloat(item.price).toFixed(2)} ₺</Text>
                <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
                    <Icon name="heart-dislike" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Favorilerim</Text>
                <Icon name="person" size={24} color="black" />
            </View>
            <FlatList
                data={favorites}
                renderItem={renderFavoriteItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.favoriteList}
            />
            <BottomNavigation navigation={navigation} currentRoute="Favorites" style={styles.bottomNavigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    appBar: {
        backgroundColor: '#9BB0C1',
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appBarTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#69303f',
    },
    favoriteList: {
        paddingBottom: 70, // Ensure space for navigation
    },
    favoriteItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    bookImage: {
        width: 100,
        height: 150,
        resizeMode: 'cover',
        marginRight: 16,
    },
    bookDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    bookName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bookPrice: {
        fontSize: 16,
        color: '#85586F',
        marginBottom: 10,
    },
    bottomNavigation: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: 'gray',
    },
});

export default FavoritesScreen;
