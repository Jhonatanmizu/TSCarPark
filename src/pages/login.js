import React from "react";
import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import logo from "../assets/logo1x.png";
export default function login() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          placeholderTextColor="#5D5FEF"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  input: {
      borderWidth: 1,
      borderRadius: 3,
      borderColor:"#5D5FEFcc",
      paddingHorizontal: 20,
      fontSize:16,
      color: "#444",
      height: 44,
      marginBottom:20,
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },
});
