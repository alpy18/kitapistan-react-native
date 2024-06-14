import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation from '../BottomNavigation'; // Adjust the import path as necessary
import booksData from '../assets/kitapistan_db.json'; // Adjust the import path as necessary

const CategoriesScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = [...new Set(booksData.books.map(book => book.category))];
        setCategories(uniqueCategories);
    }, []);

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('CategoryBooks', { category: item })}>
            <Text style={styles.categoryName}>{item}</Text>
            <Icon name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Kategoriler</Text>
            </View>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 70 }} // Prevent overlap
            />
            <BottomNavigation navigation={navigation} currentRoute="Categories" style={styles.bottomNavigation} />
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
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    categoryName: {
        fontSize: 18,
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

export default CategoriesScreen;
