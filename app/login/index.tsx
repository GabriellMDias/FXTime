import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles' 
import { ThemedSection } from '@/components/ThemedSection';
import { Ionicons } from '@expo/vector-icons';
import FormInput from '@/components/FormInput';
import ThemedButton from '@/components/ThemedButton';

export default function Login() {

    const navigateToSignup = () => {
        router.replace("/login/signup")
    }

    const makeLogin = () => {
        router.replace("/(tabs)")
    }

    return (
        <View style={styles.container}>
            <ThemedSection style={styles.leftHeader}>
                <ThemedSection style={styles.leftHeaderTextContent}>
                    <TouchableOpacity onPress={navigateToSignup}>
                        <ThemedText style={styles.firstTextLoginScreen}>
                            <Ionicons name="arrow-back"/>
                            <ThemedText style={styles.textUnderline}>Cadastrar-se</ThemedText>
                        </ThemedText>
                    </TouchableOpacity> 
                    <ThemedText style={styles.secondTextLoginScreen}>Log In</ThemedText>
                </ThemedSection>
            </ThemedSection>

            <Image source={require('@/assets/images/Logo.png')} style={styles.logo}/>

            <ThemedSection style={styles.form}>
                <FormInput 
                    label='E-mail ou número de telefone'
                    placeholder='E-mail ou número de telefone' 
                    viewStyle={styles.formInput}
                    style={styles.textInputStyle}/>

                <FormInput 
                    label='Senha'
                    placeholder='Senha'
                    secureTextEntry={true} 
                    viewStyle={styles.formInput}
                    style={styles.textInputStyle}/>    

                <ThemedButton style={styles.button} onPress={makeLogin}>
                    <ThemedText> Log In </ThemedText>
                </ThemedButton>
            </ThemedSection>
        </View>
    );
}