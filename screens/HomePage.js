import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation from '../BottomNavigation'; // Adjust the import path as necessary
import booksData from '../assets/kitapistan_db.json'; // Adjust the import path as necessary

const HomePage = ({ navigation }) => {
    const [books, setBooks] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [discountedBooks, setDiscountedBooks] = useState([]);

    useEffect(() => {
        setBooks(booksData.books.slice(0, 10)); // Set first 10 books for "Tüm Kitaplar"
        setBestSellers(booksData.books.filter(book => book.best_seller === "1").slice(0, 10)); // Set first 10 best-selling books

        // Select 10 random books for discounts
        const randomBooks = [...booksData.books].sort(() => 0.5 - Math.random()).slice(0, 10).map(book => ({
            ...book,
            discounted_price: (parseFloat(book.price) * 0.8).toFixed(2) // Apply 20% discount
        }));
        setDiscountedBooks(randomBooks);
    }, []);

    const renderBookItem = ({ item }) => (
        <TouchableOpacity style={styles.bookContainer} onPress={() => navigation.navigate('BookDetail', { book: item })}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookName}>{item.book_name}</Text>
            <Text style={styles.bookPrice}>{item.price} ₺</Text>
        </TouchableOpacity>
    );

    const renderDiscountedBookItem = ({ item }) => (
        <TouchableOpacity style={styles.bookContainer} onPress={() => navigation.navigate('BookDetail', { book: item })}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookName}>{item.book_name}</Text>
            <Text style={styles.originalPrice}>{item.price} ₺</Text>
            <Text style={styles.discountedPrice}>{item.discounted_price} ₺</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <View style={styles.appBarTitleContainer}>
                    <Text style={styles.appBarTitle}>Kitapistan</Text>
                </View>
                <Icon name="person" size={24} color="black" />
            </View>
            <ScrollView style={styles.content}>
                <TouchableOpacity onPress={() => navigation.navigate('BestSellers')}>
                    <Text style={styles.sectionTitle}>Çok Satanlar</Text>
                </TouchableOpacity>
                <FlatList
                    horizontal
                    data={bestSellers}
                    renderItem={renderBookItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.bookList}
                />
                <TouchableOpacity onPress={() => navigation.navigate('DiscountedBooks')}>
                    <Text style={styles.sectionTitle}>İndirimdekiler</Text>
                </TouchableOpacity>
                <FlatList
                    horizontal
                    data={discountedBooks}
                    renderItem={renderDiscountedBookItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.bookList}
                />
                <TouchableOpacity onPress={() => navigation.navigate('AllBooks')}>
                    <Text style={styles.sectionTitle}>Tüm Kitaplar</Text>
                </TouchableOpacity>
                <FlatList
                    horizontal
                    data={books}
                    renderItem={renderBookItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.bookList}
                />
            </ScrollView>
            <BottomNavigation navigation={navigation} currentRoute="HomePage" style={styles.bottomNavigation} />
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
    },
    appBarTitleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    appBarTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#69303f',
    },
    content: {
        padding: 16,
        marginBottom: 70, // Add margin to prevent overlap with the bottom navigation bar
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#51829B',
    },
    bookList: {
        paddingVertical: 15,
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
    originalPrice: {
        fontSize: 14,
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    discountedPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#85586F',
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

export default HomePage;
