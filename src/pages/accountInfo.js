import React from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform
  } from "react-native";
  import styles from "../styles/styles"
export default function accoutInfo(){
    return (
        <KeyboardAvoidingView  enabled={Platform.OS === "ios"} behavior="padding" style={styles.container}>
            <View style={styles.form}>
                <Text>Include</Text>
            </View>
        </KeyboardAvoidingView>
    )
}