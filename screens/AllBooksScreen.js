import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import BottomNavigation from '../BottomNavigation'; // Adjust the import path as necessary
import booksData from '../assets/kitapistan_db.json'; // Adjust the import path as necessary

const AllBooksScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksData.books);
    }, []);

    const renderBookItem = ({ item }) => (
        <TouchableOpacity style={styles.bookContainer} onPress={() => navigation.navigate('BookDetail', { book: item })}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookName}>{item.book_name}</Text>
            <Text style={styles.bookPrice}>{item.price} ₺</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={renderBookItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Set the number of columns to 2
                contentContainerStyle={styles.bookList}
            />
            <BottomNavigation navigation={navigation} currentRoute="AllBooks" style={styles.bottomNavigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    bookList: {
        paddingBottom: 20,
    },
    bookContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    bookImage: {
        width: 100,
        height: 150,
        resizeMode: 'cover',
    },
    bookName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    bookPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#85586F',
        marginTop: 5,
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

export default AllBooksScreen;
