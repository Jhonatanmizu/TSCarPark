import React, {useState} from "react"
import {Text, View,TextInput,StyleSheet,} from "react-native"
import styles from '../styles/styles'
export default function Inputs(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <>
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
        </>
    )
}