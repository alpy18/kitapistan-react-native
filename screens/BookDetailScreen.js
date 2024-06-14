import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation from '../BottomNavigation';
import { CartContext } from './CartContext';
import { FavoritesContext } from './FavoritesContext';

const BookDetailScreen = ({ route, navigation }) => {
    const { book } = route.params;
    const { addToCart } = useContext(CartContext);
    const { addToFavorites } = useContext(FavoritesContext);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <Image source={{ uri: book.image }} style={styles.bookImage} />
                <Text style={styles.bookName}>{book.book_name}</Text>
                <Text style={styles.bookPrice}>{parseFloat(book.price).toFixed(2)} ₺</Text>
                <Text style={styles.bookDetail}>
                    <Text style={styles.boldText}>Yazar: </Text>{book.author}
                </Text>
                <Text style={styles.bookDetail}>
                    <Text style={styles.boldText}>Kategori: </Text>{book.category}
                </Text>
                <Text style={styles.bookDetail}>
                    <Text style={styles.boldText}>Sayfa Sayısı: </Text>{book.pages}
                </Text>
                <Text style={[styles.bookDetail, styles.publisher]}>
                    <Text style={styles.boldText}>Yayın Evi: </Text>{book.publisher}
                </Text>
                <Text style={styles.bookDescription}>
                    {showFullDescription ? book.description : `${book.description.slice(0, 100)}...`}
                    <Text onPress={toggleDescription} style={styles.readMore}>
                        {showFullDescription ? ' Daha az göster' : ' Daha fazla göster'}
                    </Text>
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => addToCart(book)}>
                    <Icon name="cart" size={24} color="#fff" />
                    <Text style={styles.buttonText}>Sepete Ekle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToFavorites(book)}>
                    <Icon name="heart" size={24} color="#fff" />
                    <Text style={styles.buttonText}>Favorilere Ekle</Text>
                </TouchableOpacity>
            </ScrollView>
            <BottomNavigation navigation={navigation} currentRoute="BookDetail" style={styles.bottomNavigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 16,
        marginBottom: 70,
    },
    bookImage: {
        width: '70%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
        alignSelf: 'center',
    },
    bookName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    bookPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#85586F',
        marginBottom: 20,
        textAlign: 'center',
    },
    bookDetail: {
        fontSize: 16,
        marginBottom: 5,
    },
    boldText: {
        fontWeight: 'bold',
    },
    publisher: {
        marginBottom: 20,
    },
    bookDescription: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
    },
    readMore: {
        color: 'blue',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#51829B',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
    },
    favoriteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
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

export default BookDetailScreen;
