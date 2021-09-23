import React from 'react';

import { StyleSheet } from 'react-native';
const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    img:{
        display: "flex",
        flexDirection: "row",
    },
    Text:{
        fontWeight: "bold",
        fontSize: 16,
        display: "flex",
        textAlign:'center',
        alignItems: "center",
        justifyContent: "center",        
        flexDirection: "column",
    }
})

export default homeStyle;