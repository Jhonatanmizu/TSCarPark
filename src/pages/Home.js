import React from 'react'

import homeStyle from '../styles/home'

import ClientInfo from '../components/ClientInfo'
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
export default function Home({ navigation }) {
  
    return (
        <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding" style={homeStyle.container}>
            <ClientInfo name='Jhon Wick' style={homeStyle.img} />
            <View style={homeStyle.Text}>
            <Text style={homeStyle.Text}>00:25</Text>
            </View>

        </KeyboardAvoidingView>
    );
}