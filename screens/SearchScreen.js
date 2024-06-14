import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation from '../BottomNavigation'; // Adjust the import path as necessary
import booksData from '../assets/kitapistan_db.json'; // Adjust the import path as necessary

const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text) {
            const filtered = booksData.books.filter((book) =>
                book.book_name.toLowerCase().includes(text.toLowerCase()) ||
                book.author.toLowerCase().includes(text.toLowerCase()) ||
                book.publisher.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks([]);
        }
    };

    const renderBookItem = ({ item }) => (
        <TouchableOpacity style={styles.bookContainer} onPress={() => navigation.navigate('BookDetail', { book: item })}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookName}>{item.book_name}</Text>
            <Text style={styles.bookPrice}>{item.price} ₺</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Kitapistan</Text>
                <Icon name="person" size={24} color="black" />
            </View>
            <View style={styles.searchContainer}>
                <Icon name="search" size={24} color="gray" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Kitap, yazar veya yayınevi ara"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={filteredBooks}
                renderItem={renderBookItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.bookList}
            />
            <BottomNavigation navigation={navigation} currentRoute="Search" style={styles.bottomNavigation} />
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
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    appBarTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#69303f',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        margin: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        marginLeft: 10,
    },
    bookList: {
        paddingBottom: 70,
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

export default SearchScreen;
