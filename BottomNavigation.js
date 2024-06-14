import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavigation = ({ navigation, currentRoute }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                <Icon name="home" size={30} color={currentRoute === 'HomePage' ? 'red' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <Icon name="list" size={30} color={currentRoute === 'Categories' ? 'red' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon name="search" size={30} color={currentRoute === 'Search' ? 'red' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                <Icon name="heart" size={30} color={currentRoute === 'Favorites' ? 'red' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Icon name="cart" size={30} color={currentRoute === 'Cart' ? 'red' : 'black'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default BottomNavigation;
