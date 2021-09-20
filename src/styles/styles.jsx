import React from 'react';

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f2",
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        alignSelf: "stretch",
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#bd93f9",
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#444",
        height: 44,
        marginBottom: 20,
    },
    label: {
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8,
    },
    button: {
        height: 42,
        backgroundColor: "#bd93f9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    button2: {
        height: 42,
        backgroundColor: "#bd93f9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        color: "#f8f8f8",
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default styles;