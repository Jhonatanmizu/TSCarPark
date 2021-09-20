import React, {useState} from "react";
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
import LoginAlternatives from "../components/LoginAlternatives"
export default function createAccount({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('')
  async function handleCreate(){
    console.log(email, password);

    navigation.navigate('createAccount')
  }
  return (
    <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding" style={styles.container}>
      {/* <Image source={logo} /> */}
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
        {/* Name */}
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu  nome"
          placeholderTextColor="#b3afaf"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />
        {/* PASSWORD */}
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
        {/* CONFIRM PASSWORD */}
        <Text style={styles.label}>Confirme a senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          placeholderTextColor="#b3afaf"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button2} onPress={handleCreate}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
        <LoginAlternatives/>
        {/* google button */}
      </View>
    </KeyboardAvoidingView>
  );
}