import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "../styles/styles"
import { View, Text, StyleSheet } from "react-native";
function LoginAlternatives(props) {
  return (
    <View>
      <Text style={stylesLogin.text}>{props.forgotPassword}</Text>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Icon name="google" size={30} color="#bd93f9" />
        {/* Facebook */}
        <Icon name="facebook" size={30} color="#bd93f9" />
      </View>
    </View>
  );
}
export default LoginAlternatives;
const stylesLogin = StyleSheet.create({
  text: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
    color: "#444",
    textDecorationLine:"underline"
  },
});
