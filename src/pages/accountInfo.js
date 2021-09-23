import React from 'react'
import styles from '../styles/accountInfo'
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
export default function Relatorio() {
    return (
        <View style={styles.form}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Atualize seu nome"
                placeholderTextColor="#b3afaf"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}

            />
            {/*  */}
            <Text style={styles.label}>Telefone:</Text>
            <TextInput
                style={styles.input}
                placeholder="(55)"
                placeholderTextColor="#b3afaf"
                keyboardType="numeric"
                autoCorrect={false}

            />
            <Text style={styles.label}>Endereço:</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu CEP"
                placeholderTextColor="#b3afaf"
                keyboardType="numeric"
                autoCorrect={false}

            />
            <TextInput
                style={styles.input}
                placeholder="Insira sua cidade"
                placeholderTextColor="#b3afaf"
                autoCapitalize="none"
                autoCorrect={false}

            />
            <Text style={styles.label}>Info Veículo:</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira a placa"
                placeholderTextColor="#b3afaf"
                autoCapitalize="none"
                autoCorrect={false}

            />
            <TextInput
                style={styles.input}
                placeholder="Insira o modelo"
                placeholderTextColor="#b3afaf"
                autoCapitalize="none"
                autoCorrect={false}

            />
            <TextInput
                style={styles.input}
                placeholder="Insira o ano do  veículo"
                placeholderTextColor="#b3afaf"
                autoCapitalize="none"
                autoCorrect={false}

            />
            <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText}>Salvar mudanças</Text>
            </TouchableOpacity>
        </View>
    );
}