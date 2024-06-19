import { ThemedSection } from "@/components/ThemedSection";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Image, ScrollView, Alert, Dimensions } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import FormInput from "@/components/FormInput";
import ThemedButton from "@/components/ThemedButton";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { width } = Dimensions.get('window');
    const imageSize = width * 0.6;

    const navigateToLogin = () => {
        router.replace("/login");
    };

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem");
            return;
        }

        try {
            const response = await axios.post("http://192.168.1.18:8080/api/register", {
                email,
                phoneNumber: phone,
                userName,
                password,
            });
            Alert.alert("Sucesso", "Cadastro realizado com sucesso");
            navigateToLogin();
        } catch (error) {
            Alert.alert("Erro", "Falha ao realizar cadastro");
        }
    };

    return (
        <View style={styles.container}>
            <ThemedSection style={styles.leftHeader}>
                <ThemedSection style={styles.leftHeaderTextContent}>
                    <TouchableOpacity onPress={navigateToLogin}>
                        <ThemedText style={styles.firstTextSignupScreen}>
                            <ThemedText style={styles.textUnderline}>Login</ThemedText>
                            <Ionicons name="arrow-forward"/>
                        </ThemedText>
                    </TouchableOpacity> 
                    <ThemedText style={styles.secondTextSignupScreen}>Cadastro</ThemedText>
                </ThemedSection>
            </ThemedSection>
        
            <Image source={require('@/assets/images/FXTIME-logo.png')} style={[styles.logo, { width: imageSize, height: imageSize }]}/>
            
                
                <ThemedSection style={styles.form}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <FormInput 
                            label='E-mail'
                            placeholder='E-mail' 
                            viewStyle={styles.formInput}
                            style={styles.textInputStyle}
                            value={email}
                            onChangeText={setEmail}
                            />
    
                        <FormInput 
                            label='Número de telefone'
                            placeholder='Número de telefone' 
                            viewStyle={styles.formInput}
                            style={styles.textInputStyle}
                            value={phone}
                            onChangeText={setPhone}
                            />
    
                        <FormInput 
                            label='Nome de Usuário'
                            placeholder='Nome de Usuário' 
                            viewStyle={styles.formInput}
                            style={styles.textInputStyle}
                            value={userName}
                            onChangeText={setUserName}
                            />
    
                        <FormInput 
                            label='Senha'
                            placeholder='Senha'
                            secureTextEntry={true} 
                            viewStyle={styles.formInput}
                            style={styles.textInputStyle}
                            value={password}
                            onChangeText={setPassword}/>   
        
                        <FormInput 
                            label='Confirmar Senha'
                            placeholder='Confirmar Senha'
                            secureTextEntry={true} 
                            viewStyle={styles.formInput}
                            style={styles.textInputStyle}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}/>  
        
                        <ThemedButton style={styles.button} onPress={handleSignup}>
                            <ThemedText> Cadastrar </ThemedText>
                        </ThemedButton>
                        </ScrollView>
                </ThemedSection>
            
        </View>
    )
}