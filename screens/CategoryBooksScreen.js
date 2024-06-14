import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import booksData from '../assets/kitapistan_db.json';
import BottomNavigation from '../BottomNavigation';

const CategoryBooksScreen = ({ route }) => {
    const { category } = route.params;
    const [books, setBooks] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setBooks(booksData.books.filter(book => book.category === category));
    }, [category]);

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
                ListHeaderComponent={<Text style={styles.title}>{category}</Text>}
            />
            <BottomNavigation navigation={navigation} currentRoute="CategoryBooks" />
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
        marginVertical: 16,
        alignSelf: 'center',
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
        borderTopColor: 'gray',
    },
});

export default CategoryBooksScreen;
