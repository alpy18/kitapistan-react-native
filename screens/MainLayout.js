import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainLayout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Main Layout</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default MainLayout;
