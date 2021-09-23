import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
export default function BottomBar() {
    return (
        <View style={styles.bottomBarContainer}>
            <Icon name="map" size={30} color="#bd93f9"/>
            <Icon name="circle" size={30} color="#bd93f9" />
            <Icon name="user" size={30} color="#bd93f9"/>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBarContainer: {
        width: '100%',
        display: 'flex',
        padding:10,
        height: 40,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#44475A',
    }
})