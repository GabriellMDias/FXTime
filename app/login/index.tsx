import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Alert, ScrollView, Dimensions, Modal } from 'react-native';
import { styles } from './styles' 
import { ThemedSection } from '@/components/ThemedSection';
import { Ionicons } from '@expo/vector-icons';
import FormInput from '@/components/FormInput';
import ThemedButton from '@/components/ThemedButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Login() {

    const [ip, setIp] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const { width } = Dimensions.get('window');
    const imageSize = width * 0.6;

    const navigateToSignup = () => {
        router.replace('/login/signup');
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.1.18:8080/api/login', {
                emailOrPhone,
                password,
            });

            if (response.data) {
                await AsyncStorage.setItem('authToken', response.data.token);
                router.replace('/(tabs)');
            } else {
                Alert.alert('Erro', 'Credenciais inválidas');
            }
        } catch (error) {
            Alert.alert('Erro', 'Falha ao realizar login');
        }
    };

    const changeIp = async () => {
       setModalVisible(true)
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


            <TouchableOpacity style={{position: 'absolute', right: 0, top: 0}} onPress={changeIp}>
                <Text>.......</Text>
            </TouchableOpacity>

            <Image source={require('@/assets/images/FXTIME-logo.png')} style={[styles.logo, { width: imageSize, height: imageSize }]}/>


                <ThemedSection style={styles.form}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <FormInput 
                            label='E-mail ou número de telefone'
                            placeholder='E-mail ou número de telefone' 
                            viewStyle={styles.formInput}
                            style={styles.textInputStyle}
                            value={emailOrPhone}
                            onChangeText={setEmailOrPhone}/>

                        <FormInput 
                            label='Senha'
                            placeholder='Senha'
                            secureTextEntry={true} 
                            viewStyle={styles.formInput}
                            style={styles.textInputStyle}
                            value={password}
                            onChangeText={setPassword}/>    

                        <ThemedButton style={styles.button} onPress={handleLogin}>
                            <ThemedText> Log In </ThemedText>
                        </ThemedButton>
                    </ScrollView>
                </ThemedSection>  


                <Modal
                visible={modalVisible}
                >
                    <Text>test</Text>
                </Modal>
        </View>
    );
}