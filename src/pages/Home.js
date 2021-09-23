import React from 'react'
import BottomBar from '../components/BottomBar';
import homeStyle from '../styles/home'
import clock from "../assets/clock.png"
import ClientInfo from '../components/ClientInfo'
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
export default function Home({navigation}) {
    function backTo() {
        navigation.navigate('login')
    }
    return (
        <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding" style={homeStyle.container}>
            <ClientInfo name='Jhon Wick' backTo={backTo}/>
            <Image source={clock}/>
            <BottomBar />

        </KeyboardAvoidingView>
    );
}