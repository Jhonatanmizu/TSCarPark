import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, StyleSheet } from "react-native"
import profile from "../assets/profile.jpg"
export default function Client(props) {
    return (
        <View style={styles.format}>
            <Icon name="arrow-left" size={25} color="#bd93f9" onPress={props.backTo}/>
            <Image source={profile} style={styles.image}/>
        </View>
    )
}
const styles = StyleSheet.create({
    format:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width:"100%",
        justifyContent: "space-between",
        padding: 10
    },
    text:{
        fontSize: 18,
        color: "#6272A4",
        fontWeight: "700",
    },
    image: {
        width:60,
        height:60,
        borderRadius:50
    }
})