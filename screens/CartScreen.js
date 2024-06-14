import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation from '../BottomNavigation'; // Adjust the import path as necessary
import { CartContext } from './CartContext';

const CartScreen = ({ navigation }) => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <View style={styles.bookDetails}>
                <Text style={styles.bookName}>{item.book_name}</Text>
                <Text style={styles.bookPrice}>{parseFloat(item.price).toFixed(2)} ₺</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                        <Icon name="remove-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Icon name="add-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Icon name="trash" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Sepetim</Text>
                <Icon name="person" size={24} color="black" />
            </View>
            <FlatList
                data={cart}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.cartList}
            />
            <View style={styles.checkoutContainer}>
                <Text style={styles.totalPrice}>Toplam: {getTotalPrice().toFixed(2)} ₺</Text>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Ödemeye geç</Text>
                </TouchableOpacity>
            </View>
            <BottomNavigation navigation={navigation} currentRoute="Cart" style={styles.bottomNavigation} />
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
    cartList: {
        paddingBottom: 150, // Ensure space for checkout button and navigation
    },
    cartItem: {
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
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    checkoutContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 70, // Above the navigation bar
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        alignItems: 'center',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    checkoutButton: {
        backgroundColor: '#51829B',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    checkoutButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
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

export default CartScreen;
