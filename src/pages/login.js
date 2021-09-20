import React, {useState} from "react";
import LoginAlternatives from "../components/LoginAlternatives"
import styles from "../styles/styles";
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
import logo from "../assets/logo1x.png";
import goToInfo from "../functions/goToInfo"

export default function login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleCreate(){
    console.log(email, password);

    navigation.navigate('createAccount')
  }
  return (
    <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding" style={styles.container}>
      <Image source={logo} />
      <View style={styles.form}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          placeholderTextColor="#b3afaf"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#b3afaf"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleCreate}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
        {/* Login LoginAlternatives */}
        <LoginAlternatives forgotPassword="Esqueceu a senha?"/>
      </View>
    </KeyboardAvoidingView>
  );
}